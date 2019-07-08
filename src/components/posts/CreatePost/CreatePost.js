import React, { Component } from 'react';
import { createPost } from '../../../store/actions/postActions';
import { connect } from 'react-redux';
import './CreatePost.scss';
import { Redirect } from 'react-router-dom';
class CreatePost extends Component {

    state = {
        title: '',
        content: ''
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

        const { title, content } = this.state;

        // handle validation
        if ( title === '' || content === '') {
            // prevent form submission and display error to user
            
        } else {
            // create new post
            this.props.createPost(this.state);

            // redirect user to dashboard page 
            this.props.history.push('/');
        }

    }

    render() {

        const { auth } = this.props;

        if (!auth.uid) {
            return <Redirect to="/login"></Redirect>
        } else {
            return (
                <form>
                    <h2>Create New Post</h2>
                    <div>
                        <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                    </div>
                    <div>
                        <textarea name="content" onChange={this.handleChange}></textarea>
                    </div>
                    <button name="submit" type="submit" onClick={this.handleSubmit}>Create</button>
                </form>
            );
        }

    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost : (post) => dispatch(createPost(post))
    }
}

// since we're not using mapStateToProps we pass in null
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);