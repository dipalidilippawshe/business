const {getConnection} = require("../db/connections");
const { Client } = require('whatsapp-web.js');
const client = new Client();
const operations=require("../db/operation");
const whatsappqr = async(request)=>{
  return await new Promise(async (resolve,reject)=>{

    console.log("in whatsapp qr code", request.body);
    let reqObj = request.body;
    try{
        client.on('qr',async (qr) => {
            // Generate and scan this code with your phone
            console.log('QR RECEIVED', qr); 
            reqObj.qrcode = qr;
            reqObj.status ="Active";
            const op = new operations(reqObj);
            await op.save(reqObj,"testqr");
            resolve(qr);
        });
    }catch(qrError){
        reject(qrError);
    }
   
    // client.on('ready', () => {
    //     console.log('Client is ready!');
    // });
    
    // client.on('message', msg => {
    //     if (msg.body == '!ping') {
    //         msg.reply('pong');
    //     }
    // });
    
    client.initialize();
 });
}
module.exports ={whatsappqr}

