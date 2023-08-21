const express = require('express')
const router = express.Router()
const foodLogController = require('../controllers/foodLogController')

//induces
router.get('/',foodLogController.index)

router.get('/new',foodLogController.new)

router.post('/',foodLogController.create)




router.get('/:id',foodLogController.show)

module.exports = router