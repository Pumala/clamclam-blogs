import React, { Component } from 'react';
import './Register.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
        // console.log('e:', e.target.name);

        const inputName = e.target.name;

        const inputValue = e.target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('NEW STATE:', this.state);

        const { password, confirmPassword } = this.state;

        // handle validation
        if (password === confirmPassword) {
            // register successfully / redirect to dashboard
        } else {
            // prevent form submission and display error to user
        }

    }

    render() {

        const { auth } = this.props;

        if (auth.uid) {
            return <Redirect to="/"></Redirect>
        }

        return (
            <form>
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
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Register);