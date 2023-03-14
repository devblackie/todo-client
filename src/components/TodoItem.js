import React, { useState } from 'react';
import axios from 'axios';

function TodoItem({ todo, onUpdateTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    axios.put(`/todos/${todo.id}/`, { title, description })
      .then(response => {
        onUpdateTodo(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios.delete(`/todos/${todo.id}/`)
      .then(() => {
        onDeleteTodo(todo.id);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (isEditing) {
    return (
      <div>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
        <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
