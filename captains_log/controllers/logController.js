const Log = require('../models/LogModel')

module.exports.index = async(req,res)=>{
    console.log('GET /')
    let logs;
    try {
        logs = await Log.find()
    }catch(err){
        console.log(err.message)
    }
    res.render('Index',{logs})
}

module.exports.new = async(req,res) => {
    console.log('GET /new')
    res.render('New')
}

module.exports.create = async(req,res) =>{
    console.log('POST /')
    console.log(req.body)
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    try{
        const log = await Log.create(req.body)
        res.redirect('/logs')
    }catch(err){
        res.send(err.message)
    }
} 

module.exports.show = async(req,res)=>{
    console.log('GET /logs/:id')
    let log;
    try{
        log = await Log.findById(req.params.id)
        console.log('log', log)
    }catch(err){
        console.log(err.message)
    }
    if (log){
        res.render('Show',{log})
    }else{
        res.redirect('/')
    }
}

module.exports.edit = async(req,res) =>{
    console.log('GET /log/:id/edit')
    try{
        const log = await Log.findById(req.params.id)
        console.log(log)
        res.render('Edit',{log})
    }catch(err){
        console.log(err.message)
        res.redirect(`/logs/${req.params.id}`)
    }
    
}

module.exports.destroy = async(req,res) =>{
    console.log('DELETE /logs/:id')
    try{
        await Log.findByIdAndDelete(req.params.id)
    }catch(err){
        console.log(err.message)
    }
    res.redirect('/logs')
}

module.exports.update = async(req,res) =>{
    console.log('PUT /logs/:id')
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    try{
        const log = await Log.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/logs/${req.params.id}`)
    }catch(err){
        console.log(err.message)
        res.redirect(`/logs/${req.params.id}/edit`)
    }
}

module.exports.clear = async(req,res) =>{
    console.log( 'DELETE /logs/clear')
    try {
        await Log.deleteMany({})
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/logs')
}