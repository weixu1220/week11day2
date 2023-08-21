const FoodLog = require('../models/FoodLogModel')

module.exports.index = async(req, res)=>{
    console.log('GET /foodlogs')
    try{
        let foodLogs = await FoodLog.find()
        console.log('foodLogs',foodLogs)
        res.render('foodLog/Index',{foodLogs})
    }catch(err){
        console.log(err.message)
    }
}

module.exports.new = (req,res)=>{
    console.log('GET foodlogs/new')
    res.render('foodLog/New')
}

module.exports.create = async(req,res)=>{
    console.log('POST /foodlogs')
    console.log(req.body)
    try{
        let newFood = await FoodLog.create(req.body)
        console.log('newFood',newFood)
        res.redirect('/foodlogs')
    }catch(err){
        console.log(err.message)
    }
}

module.exports.show = async(req,res) =>{
    console.log('/GET /foodlogs/:id')
    let foodLog;
    try{
        foodLog = await FoodLog.findById(req.params.id)
    }catch(err){
        console.log(err.message)
    }
    if (foodLog){
        res.render('foodLog/Show',{foodLog})
    }else{
        res.redirect('/foodlogs')
    }
}