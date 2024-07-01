import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import { Todo } from "./components/Todo";

function App() {

  const [todos, setTodos] = useState([]); 

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data.todos);
  }
  
  useEffect( () => {
    fetchTodos();
  },[])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App
 