const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

app.use(express.json())

// Post is used to put something onto db
app.post('/todo', (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return ;
    }
    // Put it in mongoDB
})

app.get('/todos', (req, res) => {

});

// Put is used to update things on the db
app.put('/completed', (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You send the wrong inputs"
        })
        return ;
    }
    
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});