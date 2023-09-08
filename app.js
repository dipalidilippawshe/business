const express = require("express");
const app=express();
app.use(express.json());
// const qrcode = require('qrcode-terminal');

// const { Client } = require('whatsapp-web.js');
// const client = new Client();

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.initialize();
// client.on('message', message => {
// 	console.log(message.body);
// });
 
const {whatsappqr} = require("./routes/qr");
//const {message} = require("./routes/message");
const PORT = process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log("PORT: ", PORT);
});

app.get("/status", async(request,response)=>{
    response.end("hello");
});
app.post("/qrcode",async(request,response)=>{
    try{
        const qr = await whatsappqr(request);
        console.log("In route QR: ", qr);
        response.send({status:true,data:qr});
    }catch(err){
        response.send({status:false, error:err});
    }
    
});
