const { Client } = require('whatsapp-web.js');
const client = new Client();
const message = async(request)=>{
  return await new Promise(async (resolve,reject)=>{
    client.initialize();
    console.log("In message");
    client.on('qr', (qr) => {
        // Generate and scan this code with your phone
        console.log('QR RECEIVED', qr);
    });
    
    client.on('ready',()=>{

        console.log("client is ready");
     })
  })
}
module.exports ={message}