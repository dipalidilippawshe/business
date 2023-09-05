var mysql = require('mysql')

const host= 'localhost';
const user= 'root';
const password= 'root123';
const database= 'practice';
const port = 3306;
const createConnection = async()=>{
    return await new Promise(async(resolve,reject)=>{
        const pool = mysql.createPool({connectionLimit:10,host,user,password,database,port});
        pool.getConnection(function(error, connection){
            return(error)?
             reject({
                erro_code: "DB_ERROR",
                message: "Unable to connect to Database"
             }):resolve(connection);
        });
        pool.on('release',function(connection){
            connection.destroy();
            console.log("connection thread destroyed");
        })
    })
}

module.exports = createConnection;
