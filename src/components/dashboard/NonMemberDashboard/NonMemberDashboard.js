import React from 'react';
import './NonMemberDashboard.scss';
import { Link } from 'react-router-dom';

const NonMemberDashboard = () => {
    return (
        <div className="non-member-dashboard">

            <h2>We all have ideas, stories, and memories we want to share. We all have a voice. Let's use it, and move to a better place with our words.</h2>

            {/* <p>
                <Link to="/register">Create an account </Link> 
                to get started
            </p>
            <p>
                Already have an account?
                <Link to="/login"> Login</Link>
            </p> */}
        
        </div>
    );
};

export default NonMemberDashboard;