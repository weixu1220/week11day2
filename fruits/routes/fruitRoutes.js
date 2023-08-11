const express = require('express');
const fruitController = require('../controllers/fruitController')
const router = express.Router();

// I.N.D.U.C.E.S. (index, new, destroy, update, create, edit,show)

//index route // localhost:8080/fruits/
router.get('/',fruitController.index)

//new route
router.get('/new',fruitController.new)

//destroy route
router.delete('/:indexOfFruit',fruitController.destroy)
//update
router.put('/:indexOfFruit',fruitController.update)
//create
router.post('/', fruitController.create)

//edit
router.get('/:indexOfFruit/edit', fruitController.edit)

router.get('/filter',fruitController.filteredFruits);

//index route // localhost:8080/fruits/:indexOfFruits
router.get('/:id', fruitController.show)

module.exports = router;
