const express = require('express');
const fruitController = require('../controllers/fruitController')
const router = express.Router();

//index route // localhost:8080/fruits/
router.get('/',fruitController.index)

router.get('/filter',fruitController.filteredFruits);
//index route // localhost:8080/fruits/:indexOfFruits
router.get('/:indexOfFruits', fruitController.show)

module.exports = router;