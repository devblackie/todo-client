import React from 'react';
import mylogo from '../images/emmerce-logo.jpeg';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='naV'>
                <img src={`${mylogo}`} alt='logo' />
                <div className='navBar'>
                    <ul>
                        <li><Link to="/">Todo-List</Link></li>
                        <li><Link to="/todo-form">Todo-Form</Link></li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default NavBar