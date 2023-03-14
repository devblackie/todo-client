import React from 'react';
// import mylogo from '../images/emmerce-logo.jpeg';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <ul className='navBar'>
                <li><Link to="/">Todo-List</Link></li>
                <li><Link to="/todo-form">Todo-Form</Link></li>
            </ul>
        </>
    )
}

export default NavBar