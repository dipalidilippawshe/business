const express = require("express");
const app=express();
app.use(express.json());
const {whatsappqr} = require("./routes/qr");
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
        response.send({status:true,data:qr});
    }catch(err){
        response.send({status:false, error:err});
    }
    
})