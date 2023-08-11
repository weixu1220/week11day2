const express = require('express');
const vegetables = require('../models/vegetables')
const vegetableController = require('../controllers/vegetableController')
const router = express.Router();

// I.N.D.U.C.E.S. (index, new, destroy, update, create, edit,show)

//index route // localhost:8080/fruits/
router.get('/',vegetableController.index)

//new route
router.get('/new',vegetableController.new)

//destroy route
router.delete('/:indexOfVegetable',vegetableController.destroy)
//update
router.put('/:indexOfVegetable',vegetableController.update)
//create
router.post('/', vegetableController.create)

//edit
router.get('/:indexOfVegetable/edit', vegetableController.edit)

router.get('/filter',vegetableController.filteredVegetables);

//index route // localhost:8080/fruits/:indexOfFruits
router.get('/:indexOfVegetable', vegetableController.show)

module.exports = router;
