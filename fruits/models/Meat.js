const mongoose = require('mongoose')
//blueprint for database
const Schema = mongoose.Schema
const meatSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    readyToEat:{
        type:Boolean,
        required:true
    },
})
//takes two argument: collection, blueprint
const meat = mongoose.model('meats', meatSchema)
module.exports = meat