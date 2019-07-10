import React, { Component } from 'react';
import { signInUser } from '../../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

        console.log('AUTH LOGIN', authError);

        if (auth.uid) {
            return <Redirect to="/"></Redirect>
        } else {
            return (
                <form>
                    <h2>Login</h2>
                    <div>
                        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    </div>
                    <button name="submit" type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
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