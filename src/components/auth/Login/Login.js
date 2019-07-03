import React, { Component } from 'react';
import { signInUser } from '../../../store/actions/authActions';
import { connect } from 'react-redux';

class Login extends Component {

    state = {
        email: '',
        password: ''
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

        this.props.signInUser(this.state);
    }

    render() {
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

const mapStateToProps = (state) => {

    console.log('state in LOGIN....', state);

    return {
        authError: state.authReducer.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (credentials) => dispatch(signInUser(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);