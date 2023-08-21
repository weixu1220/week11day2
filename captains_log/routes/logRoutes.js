const express = require('express')
const router = express.Router()
const logController = require('../controllers/logController')

//induces
router.get('/',logController.index)

router.get('/new',logController.new)

router.delete('/clear',logController.clear)

router.delete('/:id',logController.destroy)

router.put('/:id', logController.update)

router.post('/',logController.create)

router.get('/:id/edit',logController.edit)

router.get('/:id',logController.show)

module.exports = router