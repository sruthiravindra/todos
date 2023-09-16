import TodoItem from "./TodoItem"

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
    return (
        <>
            <h1 className="header">Todo List</h1>
            <ul className="list">
                {todos.length === 0 && "No todos"}
                {
                    todos.map((todo) => {
                        return (
                            <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                        )
                    })}

            </ul>
        </>
    )
}

export default TodoList;