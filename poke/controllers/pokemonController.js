const pokemon = require('../models/pokemon')

module.exports.index = (req,res)=>{
    res.render('./Index',{pokemon})
}
module.exports.show = (req,res)=>{
    if(pokemon[req.params.id]){
        res.render("./Show", { poke: pokemon[req.params.id] ,index: req.params.id});
      }else{
        res.redirect('/pokemon')
      }
}