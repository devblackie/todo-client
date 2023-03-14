import React, { useState } from 'react';
import axios from 'axios';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('/todos/', { title, description })
      .then(response => {
        onAddTodo(response.data);
        setTitle('');
        setDescription('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
