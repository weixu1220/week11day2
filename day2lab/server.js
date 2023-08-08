const express = require('express');

const app = express();
const port = 8080;

app.get('/greeting',(req, res)=>{
    res.send('Hello,stranger!')
})
app.get('/greeting/:name',(req, res)=>{
    res.send(`Hello, ${req.params.name[0].toUpperCase()+(req.params.name.slice(1))}!`)
})

app.get('/tip/:total/:tipPercentage',(req, res)=>{
    let {total, tipPercentage } = req.params
    res.send(`The tip is ${total * tipPercentage / 100}`)
})

const magicResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:phrase',(req,res)=>{
    const randomNum = Math.floor(Math.random()*magicResponse.length)
    res.send(`<h1>${req.params.phrase}</h1> <h1>${magicResponse[randomNum]}</h1>`)
})
app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})