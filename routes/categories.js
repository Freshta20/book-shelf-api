const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

// Album controller routes
router.get('/', ctrl.catagories.index)
router.post('/', ctrl.catagories.create)
router.get('/:id', ctrl.catagories.show)
router.put('/:id', ctrl.catagories.update)
router.delete('/:id', ctrl.catagories.destroy)

module.exports = router