const fruits = require('../models/fruits')

function index(req,res){
    res.render('fruits/Index', {fruits})
    // res.send(fruits)
}
function show(req,res){
    // res.send(fruits[req.params.indexOfFruits])
    res.render('fruits/Show',{fruit:fruits[req.params.indexOfFruits]})
}
function filteredFruits(req,res){
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
module.exports = { index, show, filteredFruits}