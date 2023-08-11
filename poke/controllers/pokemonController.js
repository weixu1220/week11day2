// const pokemon = require('../models/pokemon')
const Pokemon = require('../models/Pokedata')

module.exports.index = async(req,res)=>{
  let pokemon;
    try{
      pokemon = await Pokemon.find()
      console.log("checkpoint!!!!!!!!!!!!!!1")
      console.log(pokemon)
    }catch(err){
      console.log(' Fail to create a pokemon ')
    }
    res.render('./Index',{pokemon})
}
module.exports.show = async(req,res)=>{
  console.log('Get /pokemon/:id')
    let poke;
    try{
      poke = await Pokemon.findById(req.params.id)
        console.log(poke)
    }catch(err){
      console.log('Fail to find pokemon document with id' + req.params.id, err)
    }
    if(poke){
        res.render("./Show", { poke});
      }else{
        res.redirect('/pokemon')
      }
}
module.exports.new = (req, res) => {
  res.render('./New')
}

module.exports.create = async(req,res)=>{
  console.log('POST/pokemon')
  console.log(req.body)
  let pokeName = req.body.name
  let pokeUrl = "http://img.pokemondb.net/artwork/"+ req.body.name + ".jpg"
  let temp = {
    name : pokeName,
    img: pokeUrl
  }
  try{
    const newPoke = await Pokemon.create(temp)
    console.log(newPoke)
  }catch(error){
    console.log('mongoCreateError', error)
  }
  res.redirect('/pokemon')
}