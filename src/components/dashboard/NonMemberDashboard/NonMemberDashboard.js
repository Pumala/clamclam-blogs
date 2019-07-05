import React from 'react';
import './NonMemberDashboard.scss';
import { Link } from 'react-router-dom';

const NonMemberDashboard = () => {
    return (
        <div className="non-member-dashboard">
            <h1>ClamClam Blogs</h1>

            <p>
                <Link to="/register">Create an account </Link> 
                to get started
            </p>
            <p>
                Already have an account?
                <Link to="/login"> Login</Link>
            </p>
        
        </div>
    );
};

export default NonMemberDashboard;