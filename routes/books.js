const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Book controller routs
router.get('/', ctrl.books.index)
router.post('/:categoryid/books/new', ctrl.books.create)
router.get('/:categoryid/books/:id', ctrl.books.show)
router.put('/:categoryid/books/:id', ctrl.books.update)
router.delete('/:categoryid/books/:id', ctrl.books.destroy)


module.exports = router