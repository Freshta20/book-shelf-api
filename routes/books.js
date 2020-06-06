const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Book controller routs
router.get('/', ctrl.categories.index)
router.post('/new', ctrl.categories.create)
// router.get('/:id', ctrl.categories.show)
// router.put('/:id', ctrl.categories.update)
// router.delete('/:id', ctrl.categories.destroy)


module.exports = router