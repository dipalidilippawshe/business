const {getConnection} = require("../db/connections");
const { Client,MessageMedia } = require('whatsapp-web.js');
const qrcode = require("qrcode-terminal");
const client = new Client();
const operations=require("../db/operation");
const whatsappqr = async(request)=>{
  return await new Promise(async (resolve,reject)=>{

    console.log("in whatsapp qr code", request.body);
    let reqObj = request.body;
    //try{
        client.on('qr',async (qr) => {
            // Generate and scan this code with your phone
            console.log('QR RECEIVED', qr); 
            qrcode.generate(qr,{small:true});
            // reqObj.qrcode = qr;
            // reqObj.status ="Active";
            // const op = new operations(reqObj);
            // await op.save(reqObj,"testqr");
            // resolve(qr);
        });
    // }catch(qrError){
    //     reject(qrError);
    // }
   
    client.on('ready', () => {
        console.log('Client is ready!');
    });
   
    client.on('message', msg => {
        console.log("msg:", msg.body);
        try{
            //const media0 = MessageMedia.fromFilePath('D:/whatsapp/media/testvedio.mp4');
            const media = MessageMedia.fromFilePath('D:/whatsapp/media/flower1.jpg');
            const media2 = MessageMedia.fromFilePath('D:/whatsapp/media/sample.pdf');
            if (msg.body == 'ping') {
               
               // msg.reply(media0);
                msg.reply(media2);
                msg.reply(media);
            }
        }catch(err){
            console.log("err: ",err);
        }
       
    });
    
    client.initialize();
 });
}
module.exports ={whatsappqr}

