import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';
import { connect } from 'react-redux';

class Navbar extends Component {

    state = {
        showNavLinks: false,
        width: 0,
        height: 0
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    toggleNavLinksView = () => {
        this.setState({
            showNavLinks: !this.state.showNavLinks
        })
    }

    render() {

        const { isUserSignedIn, profile } = this.props;

        const { showNavLinks, width } = this.state;

        return (
            <nav>
                <div className="outer-wrapper">
                    <div className="inner-wrapper">
                        <Link className="brand-logo" to="/">OurWordsMove</Link>
                        {
                            width < 768 && !showNavLinks && <i className="fas fa-bars" onClick={this.toggleNavLinksView}></i>
                        }
                        {
                            width < 768 && showNavLinks && <i className="fas fa-times" onClick={this.toggleNavLinksView}></i>
                        }
                    </div>

                    {
                        width > 767 && isUserSignedIn && <SignedInLinks profile={profile} />
                    }
                    {
                        width > 767 && !isUserSignedIn && <SignedOutLinks />
                    }

                    {
                        width < 768 && isUserSignedIn && showNavLinks && <SignedInLinks profile={profile} />
                    }
                    {
                        width < 768 && !isUserSignedIn && showNavLinks && <SignedOutLinks />
                    }
                </div>
            </nav>
        );
    }

};

const mapStateToProps = state => {
    return {
        isUserSignedIn: !state.firebase.auth.isEmpty ? true : false,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);