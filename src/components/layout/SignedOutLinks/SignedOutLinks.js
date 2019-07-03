import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignedOutLinks.scss';

const SignedOutLinks = () => {
    return (
        <ul>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
        </ul>
    );
}

export default SignedOutLinks;

