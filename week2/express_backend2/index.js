const express = require('express')

const app = express()

app.use(express.json())

let users = [{
    userName  : "ashutosh",
    gender : "male",
    repos : {
        numberOfRepo : 23,
        activity : "14 days"
    } 
}]

app.get('/', function(req,res) {
    let display = users[0]
    res.json(display)
})

app.post('/', function(req, res) {
    let data = req.body.repo
    users[0].repos.numberOfRepo += 1;
    res.json(data)
})

app.listen(8000)