import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignedInLinks.scss';
import { connect } from 'react-redux';
import { signOutUser } from '../../../store/actions/authActions';

const SignedInLinks = (props) => {

    const { signOutUser, auth, profile } = props;

    return (
        <ul>
            <li>
                <NavLink to="/create">Create Post</NavLink>
            </li>
            <li>
                <a onClick={ signOutUser }>Log Out</a>
            </li>
            <li>
                <NavLink to={`/profile/${auth.uid}`}>Profile</NavLink>
            </li>
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser : () => dispatch(signOutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
