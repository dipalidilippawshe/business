const createConnection = require("./connections");
class operations{
    constructor (data){
        this.data = data;
       
    }
   
    save = async(data,table)=>{
        let sqlconnection = await createConnection();
        let obj = {}
        const colums = Object.keys(data);
        colums.forEach(item=>{
            obj[item] = data[item];
        });
        sqlconnection.query(`insert into ${table} SET ?`, obj,function(err,result){
            if(err){
                console.log("sql save error",sqlconnection,"err:", err);
            }else{
                console.log("result saved!!");  
            }
        });
        sqlconnection.release();
        
        
    }
}
module.exports = operations;