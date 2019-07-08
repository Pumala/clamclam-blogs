import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';
import { connect } from 'react-redux';

class Navbar extends Component {

    state = {
        showNavLinks: false
    }

    toggleNavLinksView = () => {
        this.setState({
            showNavLinks: !this.state.showNavLinks
        })
    }

    render() {
        const { isUserSignedIn, profile } = this.props;

        const { showNavLinks } = this.state;

        return (
            <nav>
                <div className="wrapper">
                    <Link className="brand-logo" to="/">OurWordsMove</Link>
                    {
                        !showNavLinks ? <i className="fas fa-bars" onClick={this.toggleNavLinksView}></i> : <i className="fas fa-times" onClick={this.toggleNavLinksView}></i>
                    }
                </div>
                {
                    !showNavLinks ? null : isUserSignedIn ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />
                }
            </nav>
        );
    }

};

const mapStateToProps = state => {
    return {
        isUserSignedIn : !state.firebase.auth.isEmpty ? true : false,
        profile: state.firebase.profile
    }
}

export default  connect(mapStateToProps)(Navbar);