
const mongoose = require('mongoose');


const ExpendDetails = new mongoose.Schema({
    amount:{
        type:Number
    },
    date:{
        type:String
    }
},{versionKey:false})

const UserDetails = new mongoose.Schema({
    name:{
        type : String
    },
    email:{
        type : String
    },
    password:{
        type : Number
    }
})

//create model
const Expense = mongoose.model('ExpendsDetails',ExpendDetails);
const User = mongoose.model('UsersDetails',UserDetails);
module.exports = {Expense,User};