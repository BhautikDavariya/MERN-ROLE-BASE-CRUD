const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')


router.get('/get-all-user', (req, res) => {
    return userController.fetchUsers(req, res)
})

router.post('/add-user', (req, res) => {
    return userController.addUser(req, res)
})

router.post('/delete-user', (req, res) => {
    return userController.deleteUser(req, res)
})


router.post('/update-user', (req, res) => {
    return userController.updateUser(req, res)
})

module.exports = router