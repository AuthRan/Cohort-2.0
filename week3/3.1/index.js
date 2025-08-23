const express = require('express');
const z = require('zod')

const app = express();
app.use(express.json())

const kidneys = z.object({
    num : z.number().min(1).max(2)
})

app.post('/health-check', (req, res) => {
    let data = kidneys.safeParse(req.body)
    
    res.json({
        data : data
    })
});

app.use((error, req, res, next) => {
    res.status(500).send("Some internal error occured in the server!")
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});