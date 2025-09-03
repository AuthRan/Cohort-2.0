const express = require('express')

const app = express()

const fun1 = (req, res, next) => {
    console.log("Middleware1")
    next()
}

app.get("/welcome", fun1 , (req,res) => {
    console.log("From inside get")
    res.send("completed!")
})

app.listen(3000)

// Done
