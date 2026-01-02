const express = require('express')
const cors = require('cors')
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json())
app.use(cors())

// Post is used to put something onto db
app.post('/todo', async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            // 2xx Success, 4xx Client side error, 5xx Server Error
            msg : "You sent the wrong inputs"
        })
        return ;
    }
    // Put it in mongoDB
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "Todo Created"
    })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({})  // Gives back everything
    res.json({
        todos
    })
});

// Put is used to update things on the db
app.put('/completed', async (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You send the wrong inputs"
        })
        return ;
    }

    // .update({what to update usually by _id}, {what to update})
    await todo.update({
        _id : req.body.id
    }, {
        completed : true
    })
    res.json({
        msg : "Todo marked as completed"
    })

})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});