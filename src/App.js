import AddNewTodo from './AddNewTodo';
import './App.css';
import { useEffect, useState } from "react";
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(()=>{
    const localStoredTodo = localStorage.getItem("TODOS");
    if(localStoredTodo === null)return [];
    return JSON.parse(localStoredTodo);
  });

  useEffect(()=>{
    localStorage.setItem("TODOS", JSON.stringify(todos))
  },[todos])

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false
        }
      ]
    })
  }
  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return (
        currentTodos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo, completed
            }
          }
          return todo;
        })
      )
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return (
        currentTodos.filter((todo) => todo.id !== id)
      )
    });
  }

  return (
    <>
      <AddNewTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  );
}

export default App;
