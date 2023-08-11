const meats = require('../models/meats')

//GET /fruits
module.exports.index = (req, res) => {
  res.render("meats/Index", { meats });
  // res.send(fruits)
};
//GET fruits/:indexOFFruit
module.exports.show = (req, res) => {
  // res.send(fruits[req.params.indexOfFruits])
  if(meats[req.params.indexOfMeat]){
    res.render("meats/Show", { meat: meats[req.params.indexOfMeat] ,index: req.params.indexOfMeat});
  }else{
    res.redirect('/meats')
  }
  
};
//GET /fruits/new
module.exports.new = (req, res) => {
    console.log("here________________________-")
    res.render("meats/New");
  };

//POST /fruits
module.exports.create = (req,res)=>{
    console.log('POST/meats')
    console.log(req.body)
    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    }
    meats.push(req.body)
    res.redirect('/meats')
}
module.exports.destroy = (req, res) => {
    console.log('DELETE /meats/:indexOfMeat')
    // fruits.findIndex((fruit, index) => index == req.params.indexOfFruit)
    let index = Number(req.params.indexOfMeat)
    meats.splice(index, 1)
    res.redirect('/meats')
}
module.exports.edit = (req,res) =>{
    res.render('meats/Edit',{meat:meats[req.params.indexOfMeat], index: req.params.indexOfMeat })
}

module.exports.update = (req, res)=>{
    console.log('PUT  /meats/:indexofMeat')

    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    }
    meats[req.params.indexOfMeat]  = req.body

    res.redirect('/meats')
}

module.exports.filteredMeats = (req, res) => {
  let filters = req.query;
  const filteredMeats = meats.filter((meat) => {
    let isValid = true;
    for (let key in filters) {
      if (!meat.hasOwnProperty(key)) {
        res.status(400).send("Invalid filter: " + key);
        return;
      }
      console.log(
        "key:",
        key,
        "meat[key]",
        fruit[key],
        "filters[key]",
        filters[key]
      );
      isValid = isValid && meat[key].toString().includes(filters[key]);
    }
    return isValid;
  });
  res.send(filteredMeats);
};
