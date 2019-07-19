import React, { Component } from 'react';
import { signInUser } from '../../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DemoLoginCredentialsModal from '../../layout/DemoLoginCredentialsModal/DemoLoginCredentialsModal';
import './Login.scss';
class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        e.persist();

        const inputName = e.target.name;

        const inputValue = e.target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.signInUser(this.state);
    }

    render() {

        const { auth, authError } = this.props;

        if (auth.uid) {
            return <Redirect to="/"></Redirect>
        } else {
            return (
                <div className="login-form-wrapper">
                    <DemoLoginCredentialsModal />
                    <form className="form">
                        <h2>Login</h2>
                        <div>
                            <input type="text" placeholder="Email" name="email" onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                        </div>
                        <button name="submit" type="submit" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (credentials) => dispatch(signInUser(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);