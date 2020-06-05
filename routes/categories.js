const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

// Album controller routes
router.get('/', ctrl.catagories.index)


module.exports = router