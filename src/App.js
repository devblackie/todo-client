import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoHome from './components/TodoHome';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router className="App">
      <NavBar/>
      <Routes>
        <Route exact path='' element={<TodoHome/>}/>
        <Route exact path='/todo-form' element={<TodoForm/>}/>
        <Route exact path='/todo-item' element={<TodoList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
