const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const {Expense,User} = require('./Schema.js');

const app = express();
app.use(bodyParser.json());

async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://kanish:kanish1011@cluster0.vqkvury.mongodb.net/ExpendTracker?retryWrites=true&w=majority&appName=Cluster0");
        app.listen(1010,()=>{
        console.log("Server is running .....")
        })
    }catch(err){
            console.log("Server is not running .....");
            console.log(err);
        }
    
}
connectDB();

// app.post('/add-expend',async(req,res)=>{
//     try{
//         await Expense.create({
//                 "amount" : req.body.amount,
//                 "date" : req.body.date
//         })
//         res.status(201).json({
//             "message" : "Success"
//         })

//     }catch(err){
//         res.status(500).json({
//             "message" : "Error",
//             "error" : err,
//         })

//     }
// })

app.post('/add-expend', async(req,res)=>{
    await Expense.create({
                        "amount" : req.body.amount,
                        "date" : req.body.date
                })
                .then(()=>{
                    res.status(201).json({
                        "message": "Success"
                    });
                })
                .catch((err)=>{
                    res.status(500).json({
                        "message": "Error",
                        "error": err
                    });
                });
});



