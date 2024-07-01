const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { createTodo, updateTodo} = require("./types");
const { Todo } = require("./db");

const app = express()
app.use(bodyParser.json());
app.use(cors());

app.post("/todo", async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You send the wrong inputs"
        })
        return;
    }
    await Todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    })
    res.status(200).send({
        message: "Todo created successfully"
    })
});

app.get("/todos", async(req, res) => {
    const todos = await Todo.find({});
    res.status(200).send({
        todos
    })
});

app.put("/completed", async(req, res) => {
    const payload = req.body; 
    const parsePayload = updateTodo.safeParse(payload);

    if(!parsePayload.success){
        res.status(411).json({
            message: "You send the wrong inputs"
        })
        return;
    }
  
    Todo.find({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        message: "Todo completed successfully"
    })
})

app.listen(3000, () => {    
    console.log("Server is running on port 3000");
})