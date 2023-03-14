import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todos/')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCreateTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = updatedTodo => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  };

  const handleDeleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onCreateTodo={handleCreateTodo} onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
