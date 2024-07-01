

export function Todo({todos}) {
    return <div>

        {
            todos.map( (todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h1>{todo.description}</h1>
                    <button>{todo.completed ? "completed": "Mark as complete"}</button>
                </div>
            })
        }
    </div>
}