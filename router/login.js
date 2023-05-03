const express = require('express')
const router = express.Router()

const loginController = require('../controller/loginController')


router.post('/login', (req, res) => {
    return loginController.login(req, res)
})


router.post('/ragister', (req, res) => {
    return loginController.ragister(req, res)
})

module.exports = router