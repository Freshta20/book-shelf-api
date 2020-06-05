const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

// PATH = /api/v1/auth
router.get('/register', ctrl.auth.get_register)
// Auth controller routes
router.post('/register', ctrl.auth.register)
router.post('/login', ctrl.auth.login)
router.get('/verify', ctrl.auth.verify)
router.delete('/logout', ctrl.auth.logout)


module.exports = router