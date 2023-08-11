const express = require('express')
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')

const app = express();

const methodOverride = require('method-override')

const port = 8080;

require('dotenv').config()

const mongoConfig = require('./config')
mongoConfig()

const jsxEngine = require('jsx-view-engine');
app.set('view engine', 'jsx')
app.engine('jsx',jsxEngine())

app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    res.send('Hello')
})

//setup middle ware to formate the data into an object we can use on req.body
//this middle ware need to be above all the routes in the server so it can set up data before setting up routes
app.use(express.urlencoded({extended:true}))

//for middle ware and connect to fruitRoutes
app.use('/fruits',fruitRoutes)
app.use('/meats',meatRoutes)
app.use('/vegetables',vegetableRoutes)

app.listen(port,()=>{
    console.log('Listening on port: ' + port)
});