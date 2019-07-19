import React from 'react';
import './NonMemberDashboard.scss';
import { Link } from 'react-router-dom';
import TestLoginCredentialsModal from '../../layout/TestLoginCredentialsModal/TestLoginCredentialsModal';

const NonMemberDashboard = () => {

    return (
        <div className="non-member-dashboard">

            <TestLoginCredentialsModal />

            <h2>
                We all have ideas, stories, and memories we want to share. We all have a voice. Let's use it, and move to a better place with our words.
                </h2>

        </div>
    );
};

export default NonMemberDashboard;