const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

// PATH = /api/v1/auth
router.get('/register', ctrl.auth.get_register)

router.post('/register', ctrl.auth.register)



module.exports = router