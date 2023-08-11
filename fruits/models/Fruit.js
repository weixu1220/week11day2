const mongoose = require('mongoose')
//blueprint for database
const Schema = mongoose.Schema
const fruitSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    readyToEat:{
        type:Boolean,
        required:true
    },
})
//takes two argument: collection, blueprint
const Fruit = mongoose.model('fruits', fruitSchema)
module.exports = Fruit