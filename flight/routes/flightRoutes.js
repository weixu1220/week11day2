const express = require('express')

// Create our router
const router = express.Router()

// Bring in our controller logic
const flightController = require('../controllers/flightController')

// I.N.D.U.C.E.S (Index, New, Destroy, Update, Create, Edit, Show)

// "index" route      
router.get('/', flightController.index)

// "new" route
router.get('/new', flightController.new)

// "clear" route
router.delete('/clear', flightController.clear)

// "destroy" route
router.delete('/:id', flightController.destroy)

// "update" route
router.put('/:id', flightController.update)

// "create" route
router.post('/', flightController.create)

// "edit" route
router.get('/:id/edit', flightController.edit)


router.put('/update/:id',flightController.updateDestination)
// "show" route      
router.get('/:id', flightController.show)

module.exports = router