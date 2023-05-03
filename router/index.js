const express = require('express')
const router = express.Router()
const { ensureAuthorized } = require('../middleware/auth')


const login = require('./login')
const user = require('./user')


router.use('/api', ensureAuthorized, login)
router.use('/api', ensureAuthorized, user)

module.exports = router