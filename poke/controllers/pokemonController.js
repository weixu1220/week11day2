// const pokemon = require('../models/pokemon')
const Pokemon = require('../models/Pokedata')

module.exports.index = async(req,res)=>{
  console.log('GET /pokemon')
  let pokemon;
    try{
      pokemon = await Pokemon.find()
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
  console.log('POST /pokemon')
  let pokeName = req.body.name.toLowerCase()
  let pokeUrl = "http://img.pokemondb.net/artwork/"+ pokeName + ".jpg"
  let temp = {
    name : pokeName,
    img: pokeUrl
  }
    // Check if the Pokémon already exists in the database
    const existingPoke = await Pokemon.findOne({ name: pokeName });
    if (existingPoke) {
      console.log('Pokemon already exists:', existingPoke);
      res.send(
        `<script>alert('Pokemon "${pokeName}" already exists!'); window.location.href = '/pokemon';</script>`
      );
      return;
    }else{
      try{
        const newPoke = await Pokemon.create(temp)
      }catch(error){
        console.log('mongoCreateError', error)
      }
    }
  res.redirect('/pokemon')
}