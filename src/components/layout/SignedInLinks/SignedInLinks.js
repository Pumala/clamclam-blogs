import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignedInLinks.scss';

const SignedInLinks = () => {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/create">Create Post</NavLink>
            </li>
            <li>
                <NavLink to="/logout">Log Out</NavLink>
            </li>
            <li>
                <NavLink to="/">ClamClam</NavLink>
            </li>
        </ul>
    );
}

export default SignedInLinks;
