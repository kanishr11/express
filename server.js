const bodyParser = require('body-parser');
const express = require('express');
// const fs_module = require('fs')

//get, post, delete, put, patch

const app = express();
// fs_module.readFile('./index.html',(error,file)=>{
//     if(error){
//         res.send("<h1>Error Message</h1>");
//         return;
//     }
//         try{
//             app.get('/',(req,res)=>{
//                 res.send(file);
//             })
//         }catch(err){
//             console.log(err)
//         }
// }); 

app.use(bodyParser.json())

//get method:
app.get('/',(req,res)=>{
                    res.send("<h1 style='text-align:center;color:yellow;'>Vaa da mapulai</h1>");
                })


//post method:
app.post('/postmethod',(req,res)=>{
    const data = req.body;
    console.log(data)
    if(data.name == "kanish" && data.password == 12345){
        console.log("Validated")
    }else{
        // console.log("User not found")
        return res.status(400).json(`<h1>Bad Request</h1>`);
    }
    res.send("User Data ....");
})



app.listen(4000,()=>{
    console.log("Server is running.....")
});