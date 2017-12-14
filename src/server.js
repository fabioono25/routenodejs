global.Promisse = require('bluebird')

const express = require('express'),
bodyParser    = require('body-parser'),
cors          = require('cors'),
app           = express()

app.use(bodyParser.json())
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/gateway-trackings/:campainId', require('./request-handlers/partner-tracking'))

const port = process.env.port || 3000

app.listen(port, () => console.log(`server started on port: ${port}`))