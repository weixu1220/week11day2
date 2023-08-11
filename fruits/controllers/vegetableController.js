const vegetables = require('../models/vegetables')

//GET /fruits
module.exports.index = (req, res) => {
  res.render("vegetables/Index", { vegetables });
  // res.send(fruits)
};
//GET fruits/:indexOFFruit
module.exports.show = (req, res) => {
  // res.send(fruits[req.params.indexOfFruits])
  if(vegetables[req.params.indexOfVegetable]){
    res.render("vegetables/Show", { vegetable: vegetables[req.params.indexOfVegetable] ,index: req.params.indexOfVegetable});
  }else{
    res.redirect('/vegetables')
  }
  
};
//GET /fruits/new
module.exports.new = (req, res) => {
    res.render("vegetables/new");
  };

//POST /fruits
module.exports.create = (req,res)=>{
    console.log('POST/vegetables')
    console.log(req.body)
    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/vegetables')
}
module.exports.destroy = (req, res) => {
    console.log('DELETE /vegetables/:indexOfVegetable')
    // fruits.findIndex((fruit, index) => index == req.params.indexOfFruit)
    let index = Number(req.params.indexOfVegetable)
    vegetables.splice(index, 1)
    res.redirect('/vegetables')
}
module.exports.edit = (req,res) =>{
    res.render('vegetables/Edit',{vegetable:vegetables[req.params.indexOfVegetable], index: req.params.indexOfVegetable })
}

module.exports.update = (req, res)=>{
    console.log('PUT  /vegetables/:indexOfVegetable')

    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    }
    vegetables[req.params.indexOfVegetable]  = req.body

    res.redirect('/vegetables')
}

module.exports.filteredVegetables = (req, res) => {
  let filters = req.query;
  const filteredVegetables = vegetables.filter((vegetable) => {
    let isValid = true;
    for (let key in filters) {
      if (!vegetable.hasOwnProperty(key)) {
        res.status(400).send("Invalid filter: " + key);
        return;
      }
      console.log(
        "key:",
        key,
        "fruit[key]",
        vegetable[key],
        "filters[key]",
        filters[key]
      );
      isValid = isValid && vegetable[key].toString().includes(filters[key]);
    }
    return isValid;
  });
  res.send(filteredVegetables);
};
