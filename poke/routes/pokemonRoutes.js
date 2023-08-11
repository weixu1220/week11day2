const express = require('express');
const pokemonController = require('../controllers/pokemonController')
const router = express.Router();

router.get('/',pokemonController.index);
router.get('/:id', pokemonController.show)

module.exports = router;