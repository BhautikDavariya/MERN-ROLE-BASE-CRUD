let mongoose = require('mongoose')

require('../model/loginShema')
require('../model/userSchema')

mongoose.set('debug', (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc)
})
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/userauthcrud", { useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection failed'))

db.once('open', function () {
    console.log('Database connected successfully!')
})