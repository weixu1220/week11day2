const express = require('express');
const pokemonRoutes = require('./routes/pokemonRoutes')
const pokemon = require('./models/pokemon')
const app = express();

require('dotenv').config()

const mongoConfig = require('./config')
mongoConfig()

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx',jsxEngine())

const port = 3000;

app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send(`<a href="/pokemon">Welcome to the Pokemon App!</a>`)
})

app.use('/pokemon',pokemonRoutes)

app.listen(port, ()=>{
    console.log('Listening on port: ', port, process.env.MONGO_URL)
})


