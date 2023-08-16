const mongoose = require('mongoose')
const Schema = mongoose.Schema

// child schema
const destinationSchema = new Schema({
    airport: {
        type: String,
        enum:['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    },
    arrival: {
        type: Date,
    }
    
})
// this Schema acts as a blueprint for our data
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: {values:['American', 'Southwest', 'United'], message: '{VALUE} is not supported'},
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
    },
    depart: {
        type: Date,
        required: true,
        default:()=> Date.now() + 365
    },
    airport: {
        type: String,
        enum:['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    destinations: {
        type:[ destinationSchema],
    }
})

// 1st argument is the collection, 2nd is the Schema (blueprint) 
const Flight = mongoose.model('flights', flightSchema)

module.exports = Flight
