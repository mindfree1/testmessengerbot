use 'strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000)

// Process application/x-www-form-urlencodedn
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route, root route
app.get('/', function (req, res) {
   res.send('Hello world, I am a chat bot')
}

// Facebook verifcation of token
app.get('/webhook/', function(req, res) {
   if (req.query['hub.verify_token'] === 'mytestbot') {
	res.send(req.query['hub.challenge'])
   } 
   res.send('Error, incorrect token supplied, bot failed to initialize')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
