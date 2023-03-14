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
    <div className='table'>
      <h2>Todo List</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo =>
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>

              </td>
            </tr>)}
        </tbody>
      </table>
      {/* <ul className='lister'>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.description}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default TodoList;
