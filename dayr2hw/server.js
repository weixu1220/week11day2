const express = require('express')
const app = express()
const port=8080
app.get('/',(req,res)=>{
    res.send(`<p>99 Bottles of beer on the wall</p>
    <a href="/98">take one down, pass it around</a>`)
})
app.get('/:number_of_bottles',(req,res)=>{
    if (req.params.number_of_bottles.toString() == "0"){
       res.send(`<a href="/">Start Over</a>`) 
    }else{
        res.send(`<p>${req.params.number_of_bottles} Bottles of beer on the wall.</p>   
    <a href=/${req.params.number_of_bottles-1}>take one down, pass it around</a>`)
    }
})
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})