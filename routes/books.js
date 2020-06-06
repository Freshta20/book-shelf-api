const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Book controller routs
router.get('/', ctrl.books.index)
router.post('/new', ctrl.books.create)
router.get('/:id', ctrl.books.show)
// router.put('/:id', ctrl.books.update)
// router.delete('/:id', ctrl.books.destroy)


module.exports = router