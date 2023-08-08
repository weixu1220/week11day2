const express = require('express');
const meats = require('../models/meats')
const meatController = require('../controllers/meatController')
const router = express.Router();

//index route // localhost:8080/fruits/
router.get('/',meatController.index)

//index route // localhost:8080/fruits/:indexOfFruits
router.get('/:indexOfMeats', meatController.show)

module.exports = router;