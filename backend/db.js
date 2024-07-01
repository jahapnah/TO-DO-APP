const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://khairrishi:rishi%40123@cluster0.aokqtgz.mongodb.net/todo-app").then( () => {
    console.log("Connected to the database");
}).catch( (err) => {
    console.log("Error connecting to the database", err);
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo
}