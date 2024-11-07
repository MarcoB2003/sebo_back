import mysql from 'mysql2/promise';

let con;

// Função para criar a conexão com o banco de dados
async function criarConexao() {
    if (!con) {
        con = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PWD,
            database: process.env.MYSQL_DB,
            typeCast: function (field, next) {
                if (field.type === 'TINY' && field.length === 1) {
                    return (field.string() === '1');
                } else if (field.type.includes('DECIMAL')) {
                    return Number(field.string());
                } else {
                    return next();
                }
            }
        });
        console.log('--> Conexão com BD realizada');
    }
    return con;
}

export default criarConexao;
