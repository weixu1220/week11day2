const mongoose = require('mongoose')

const Schema = mongoose.Schema

const foodLogSchema = new Schema({
    name:{
        type:String,
    },
    quantity:{
        type:String,
    }
},{timestamps:true})

const FoodLog = mongoose.model('foodlogs',foodLogSchema)
module.exports = FoodLog