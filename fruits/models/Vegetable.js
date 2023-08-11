const mongoose = require('mongoose')
//blueprint for database
const Schema = mongoose.Schema
const vegetableSchema = new Schema({
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
const Vegetable = mongoose.model('vegetables', vegetableSchema)
module.exports = Fruit