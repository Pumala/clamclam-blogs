import React, { Component } from 'react';
import './Register.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpUser } from '../../../store/actions/authActions';
class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
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

        const { firstName, lastName, email, password, confirmPassword } = this.state;

        // handle validation
        if (password === confirmPassword) {
            // register successfully / redirect to dashboard
            this.props.signUpUser({
                firstName,
                lastName,
                email,
                password
            });
        } else {
            // TODO: prevent form submission and display error to user
        }

    }

    render() {

        const { auth, authError } = this.props;

        if (auth.uid) {
            return <Redirect to="/"></Redirect>
        }

        return (
            <div className="register-form-wrapper">
                <form className="form">
                    <h2>Register</h2>
                    <div>
                        <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={this.handleChange} />
                    </div>
                    <button name="submit" type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (newUserInfo) => dispatch(signUpUser(newUserInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);