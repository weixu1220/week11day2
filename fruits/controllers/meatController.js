const meats = require('../models/meats')

function index(req,res){
    // res.send(meats)
    res.render('meats/Index', {meats})
}
function show(req,res){
    // res.send(meats[req.params.indexOfMeat])
    res.render('meats/Show',{meat:meats[req.params.indexOfMeats]})
}
function filterMeat(req,res){
    let filters = req.query;
    const filteredFruits = fruits.filter(fruit =>{
        let isValid = true;
        for (let key in filters){
            if (!fruit.hasOwnProperty(key)){
                res.status(400).send('Invalid filter: ' + key);
                return;
            }
            console.log("key:", key, "fruit[key]", fruit[key],"filters[key]", filters[key]);
            isValid = isValid && fruit[key].toString().includes(filters[key]);
        }
        return isValid;
    });
    res.send(filteredFruits);
}
module.exports = { index, show}