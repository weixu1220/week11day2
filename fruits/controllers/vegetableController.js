const vegetables = require('../models/vegetables')

function index(req,res){
    // res.send(vegetables)
    res.render('vegetables/Index', {vegetables})
}
function show(req,res){
    // res.send(vegetables[req.params.indexOfVegetable])
    res.render('vegetables/Show',{vegetable:vegetables[req.params.indexOfVegetables]})
}
module.exports = { index, show}