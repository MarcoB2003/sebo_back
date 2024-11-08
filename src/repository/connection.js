import mysql from 'mysql2/promise';

async function conectarBD() {
    try {
        const con = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PWD,
            database: process.env.MYSQL_DB,
            ssl: {
                // Aceitar certificados autoassinados
                rejectUnauthorized: false,
            },
            typeCast: function (field, next) {
                if (field.type === 'TINY' && field.length === 1) {
                    return (field.string() === '1'); // Trata BOOLEAN como TINYINT(1)
                } else if (field.type.includes('DECIMAL')) {
                    return Number(field.string()); // Converte DECIMAL para número
                } else {
                    return next();
                }
            },
            multipleStatements: false, // Segurança adicional (evita SQL Injection)
        });

        console.log('--> Conexão com BD realizada');
        return con;
    } catch (err) {
        console.error('--> Erro ao conectar no BD:', err.message);
        throw err;
    }
}

const con = await conectarBD();

export default con;
