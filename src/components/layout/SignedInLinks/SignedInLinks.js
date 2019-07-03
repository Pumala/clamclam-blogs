import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignedInLinks.scss';
import { connect } from 'react-redux';
import { signOutUser } from '../../../store/actions/authActions';

const SignedInLinks = (props) => {

    // const logoutUser = () => {

    //     // console.log('WANT TO LOGOUT!!!!', props.email);
    //     props.signOutUser(signOutUser())
    // }

    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/create">Create Post</NavLink>
            </li>
            <li>
                <button onClick={props.signOutUser}>Log Out</button>
            </li>
            <li>
                <NavLink to="/">ClamClam</NavLink>
            </li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser : () => dispatch(signOutUser())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
