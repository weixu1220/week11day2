const express = require('express')
const app = express()
const port = 3000
const flightRoutes = require('./routes/flightRoutes')
require('dotenv').config()

// Load the configuration function
const mongoConfig = require('./config')

// Setup connection to MongoDB
mongoConfig()

const jsxEngine = require('jsx-view-engine')

// Load the method override function
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', jsxEngine())

// give our form more HTTP method to work with (like DELETE and PUT)
app.use(methodOverride('_method'))

// A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: true }))

app.get('/',(req, res)=>{
    res.send('Here')
})

app.use('/flights', flightRoutes)

app.listen(port,()=>{
    console.log('Listening on port', port,  process.env.MONGO_URL)
})