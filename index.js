require('dotenv').config()
const express = require('express')
require('./config/db')
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser")
const router = require('./router/index')

app.use(cors())

app.use(
    bodyParser.json({
        limit: '1024mb',
    }),
)
app.use(
    bodyParser.urlencoded({
        limit: '1024mb',
        extended: true,
    }),
)
// api routes
app.use('/', router)
// write process.env.PORT || 3000 because the PORT will be assigned dynamically from the server when we host the application
// for local development we will use the port 3000
const port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log(`The web server has started on port ${port}`);
});