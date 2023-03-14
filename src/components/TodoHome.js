import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './set.css'
import TodoList from './TodoList';

function TodoHome() {
  const [todos, setTodos] = useState([]);
  const baseurl = 'http://127.0.0.1:8000'

  useEffect(() => {
    axios.get(`${baseurl}/todos/`)
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
    <div className='home'>
      <TodoList todos={todos} onCreateTodo={handleCreateTodo} onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default TodoHome