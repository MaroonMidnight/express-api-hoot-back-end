const express = require('express')
const router = express.Router()

//import json token package
const jwt = require('jsonwebtoken')

// Login, Signup
router.get("/sign-token", function(req, res) {

    //SIMULATING SIGNING A JWT TOKEN
    //1. The payload to be included in the JWT (payload=what you want to be stored in the jwt)
    //2. Secret key to sign the JWT (stored im the .env)
    //3. Optional options object (when does the token expire)

    //payload
    const user = {
        _id: 1,
        username: 'John'
    }

    const token = jwt.sign({user}, process.env.JWT_SECRET)

    res.json(
        {token}
    )
})

// We would do this on every single request coming in to the server after the user logs in or signups
router.post('/verify-token', function(req, res) {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token, '<-token in the headers')

    //decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded, '<- decoded token')

    res.json({token})
})

module.exports = router