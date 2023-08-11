const express = require('express');
const pokemonController = require('../controllers/pokemonController')
const router = express.Router();

router.get('/',pokemonController.index);



router.get('/new', pokemonController.new);

router.post('/', pokemonController.create);

router.get('/:id', pokemonController.show);

module.exports = router;