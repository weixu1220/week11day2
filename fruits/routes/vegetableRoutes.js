const express = require('express');
const vegetables = require('../models/vegetables')
const vegetableController = require('../controllers/vegetableController')
const router = express.Router();

//index route // localhost:8080/fruits/
router.get('/',vegetableController.index)

//index route // localhost:8080/fruits/:indexOfFruits
router.get('/:indexOfVegetables', vegetableController.show)

module.exports = router;