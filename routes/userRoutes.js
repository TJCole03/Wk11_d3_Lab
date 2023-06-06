const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.post('/user/logout', userController.logoutUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)
router.get('/users', userController.listUsers) 



module.exports = router





// app.get('/users', async (req, res) {
    
// })

// app.post('/users', async (req, res) {

// })

// app.put('/users/:id', async (req, res) {

// })

// app.post('/users/login', async (res, req) {

// })

// app.post('/users/logout', async (req, res) {

// })