const pokemon = require('../models/pokemon')

module.exports.index = (req,res)=>{
    res.render('./Index',{pokemon})
}