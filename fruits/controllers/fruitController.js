// const fruits = require("../models/fruits");
let fruits;
const Fruit = require('../models/Fruit');
//GET /fruits
module.exports.index = async(req, res) => {
  const fruits = await Fruit.find()
  console.log(fruits)
  res.render("fruits/Index", { fruits });
  // res.send(fruits)
};
//GET fruits/:id
module.exports.show = async (req, res) => {
  // res.send(fruits[req.params.indexOfFruits])
  console.log('GET /fruits/:id')
  let fruit;
  try{
    
    fruit = await Fruit.findById(req.params.id)
  }catch(err){
    console.log('fail to find fruit document with id' + req.params.id, err)
  }
  
  if(fruit){
    res.render("fruits/Show", { fruit });
  }else{
    res.redirect('/fruits')
  }
  
};
//GET /fruits/new
module.exports.new = (req, res) => {
    res.render("fruits/new");
  };

//POST /fruits
module.exports.create = async(req,res)=>{
    console.log('POST/fruits')
    console.log(req.body)
    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    }
    try{
      const newFruit = await Fruit.create(req.body)
      console.log(newFruit)
    }catch(error){
      console.log('mongoCreateError', error)
    }
    res.redirect('/fruits')
}
module.exports.destroy = (req, res) => {
    console.log('DELETE /fruits/:indexOfFruit')
    // fruits.findIndex((fruit, index) => index == req.params.indexOfFruit)
    let index = Number(req.params.indexOfFruit)
    fruits.splice(index, 1)
    res.redirect('/fruits')
}
module.exports.edit = (req,res) =>{
    res.render('fruits/Edit',{fruit:fruits[req.params.indexOfFruit], index: req.params.indexOfFruit })
}

module.exports.update = (req, res)=>{
    console.log('PUT  /fruits/:indexofFruit')

    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    }
    fruits[req.params.indexOfFruit]  = req.body

    res.redirect('/fruits')
}

module.exports.filteredFruits = (req, res) => {
  let filters = req.query;
  const filteredFruits = fruits.filter((fruit) => {
    let isValid = true;
    for (let key in filters) {
      if (!fruit.hasOwnProperty(key)) {
        res.status(400).send("Invalid filter: " + key);
        return;
      }
      console.log(
        "key:",
        key,
        "fruit[key]",
        fruit[key],
        "filters[key]",
        filters[key]
      );
      isValid = isValid && fruit[key].toString().includes(filters[key]);
    }
    return isValid;
  });
  res.send(filteredFruits);
};
