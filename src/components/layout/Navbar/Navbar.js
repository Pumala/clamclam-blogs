import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';
import { connect } from 'react-redux';
import { signInUser } from '../../../store/actions/authActions';

const Navbar = (props) => {

    const { isUserSignedIn, profile } = props;

    return (
        <nav>
            <Link className="brand-logo" to="/">ClamClam Blogs</Link>
            {
                isUserSignedIn ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />
            }
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        isUserSignedIn : !state.firebase.auth.isEmpty ? true : false,
        profile: state.firebase.profile
    }
}

export default  connect(mapStateToProps)(Navbar);