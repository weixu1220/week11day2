const express = require('express')
const fruits = require('./models/fruits')
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const app = express();
const port = 8080;
const jsxEngine = require('jsx-view-engine');
app.set('view engine', 'jsx')
app.engine('jsx',jsxEngine())

app.get('/',(req,res)=>{
    res.send('Hello')
})
//for middle ware and connect to fruitRoutes
app.use('/fruits',fruitRoutes)
app.use('/meats',meatRoutes)
app.use('/vegetables',vegetableRoutes)

app.listen(port,()=>{
    console.log('Listening on port: ' + port)
});