const express = require('express');
const pokemonRoutes = require('./routes/pokemonRoutes')
const pokemon = require('./models/pokemon')
const app = express();

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx',jsxEngine())

const port = 3000;

app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send(`<div><h1>Welcome to the Pokemon App!</h1></div>`)
})

app.use('/pokemon',pokemonRoutes)

app.listen(port, ()=>{
    console.log('Listening on port: ', port)
})


