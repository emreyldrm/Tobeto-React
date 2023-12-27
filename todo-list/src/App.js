import { useState } from 'react';
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo(){

    if(!newTodo){
      alert("enter a to-do")
      return
    }

    const todo = {
      id: Math.floor(Math.random()*1000),
      value: newTodo
    }
    setTodos(oldTodos => [...oldTodos, todo])
    setNewTodo("")
  }

  function deleteTodo(id){
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
    
  }


  return (
    <div className="App">
      <h1>To - Do List App</h1>

      <input type='text' placeholder='add new to-do' value={newTodo} 
      onChange={todo => setNewTodo(todo.target.value)}/>

      <button onClick={() => addTodo()}>Add</button>

      <ul>
        {todos.map(todo => {
          return(
            <li key={todo.id}>{todo.value} <button onClick={() => deleteTodo(todo.id)}> X </button></li>
          )

        })}
      </ul>

    </div>
  );
}

export default App;
