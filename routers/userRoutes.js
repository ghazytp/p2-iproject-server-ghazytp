const router = require('express').Router()
const UserController = require('../controller/userController')

router.post('/login', UserController.login)
router.post('/register', UserController.register)

router.get('/buy/:id')

module.exports = router