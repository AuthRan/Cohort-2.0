const express = require('express');
const z = require('zod')

const app = express();
app.use(express.json())

app.get('/health-check', (req, res) => {
    let numKidney = req.body.num;

    res.send("You have "+numKidney+" of kidneys");
});

app.use((error, req, res, next) => {
    res.status(500).send("Some internal error occured in the server!")
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});