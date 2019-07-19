import React, { Component } from 'react';
import './DemoLoginCredentialsModal.scss';

class DemoLoginCredentialsModal extends Component {

    state = {
        openModal: true
    }

    closeModal = () => {
        this.setState({ openModal: false });
    }

    render() {

        const { openModal } = this.state;

        if (openModal) {
            return (
                <div className="test-login-popup">
                    <div className="wrapper">
                        <p className="test-login-creds">
                            <span>Demo Login Credentials:</span>
                            <span>Email: test123@gmail.com</span>
                            <span>Password: test123</span>
                        </p>
                        <i className="fas fa-times" onClick={this.closeModal}></i>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default DemoLoginCredentialsModal;
