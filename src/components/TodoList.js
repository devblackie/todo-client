import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
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

  return (
    <div>
      <h2>Todo List</h2>
      <ul className='lister'>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
