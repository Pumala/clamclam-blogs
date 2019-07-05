import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Please go back <Link to="/">home</Link>
            </p>
        </div>
    );
};

export default NotFound;