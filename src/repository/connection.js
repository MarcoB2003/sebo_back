import mysql from 'mysql2/promise';


let con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB, //se for tirar o codigo de baixo, tira essa virgula
    
    typeCast: function (field, next) { //codigo adicional para arrumar umas coisas no thunderclient
        
        if (field.type === 'TINY' && field.length ===1) {
            return (field.string() === '1');
        }
        else if (field.type.includes('DECIMAL')){
            return Number(field.string());
        }
        else{
            return next ();
        }
    } //qlq coisa só apagar daqui até lá em cima no typeCast para tirar isso, já que não tem muita importancia

})

console.log('--> Conexão com BD realizada');

export default con;