const express = require('express');
const meats = require('../models/meats')
const meatController = require('../controllers/meatController')
const router = express.Router();
// I.N.D.U.C.E.S. (index, new, destroy, update, create, edit,show)
//index route // localhost:8080/fruits/
router.get('/',meatController.index)

router.get('/new', meatController.new)

//destroy route
router.delete('/:indexOfMeat',meatController.destroy)
//update
router.put('/:indexOfMeat',meatController.update)
//create
router.post('/', meatController.create)

//edit
router.get('/:indexOfMeat/edit', meatController.edit)

router.get('/filter',meatController.filteredMeats);

//index route // localhost:8080/fruits/:indexOfFruits
router.get('/:indexOfMeat', meatController.show)



module.exports = router;