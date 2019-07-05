import React, { Component } from 'react';
import './EditPost.scss';
import { Link } from 'react-router-dom';
import { updateUserPost, deleteUserPost } from '../../../store/actions/postActions';
import { connect } from 'react-redux';

class EditPost extends Component {

    // const { authorId, content, createdAt, firstName, title } = this.props.location.state;

    state = {
        ...this.props.location.state,
        id: this.props.match.params.id
    }

    handleChange = (e) => {
        e.persist();

        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handlePostUpdate = () => {
        this.props.updateUserPost(this.state);
        
        // redirect user to dashboard page 
        // this.props.history.push(`/post/${this.state.id}`);
        this.props.history.push({
            pathname: `/post/${this.state.id}`,
            state: this.state
        });
    };

    handlePostDeletion = () => {

        console.log('DELETEING::', this.state);
        this.props.deleteUserPost(this.state);

        this.props.history.push('/');
    };

    render() {

        console.log('props in edit post:', this.props);

        const { id, title, content } = this.state;

        if (this.state) {
            return (
                <form className="edit">
                    <h2>Edit Post</h2>
                    <div>
                        <input type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <textarea name="content" onChange={this.handleChange} value={content}></textarea>
                    </div>
                    <button><Link to={`/post/${id}`}>Cancel</Link></button>
                    <button onClick={this.handlePostUpdate}>Save</button>
                    <button onClick={this.handlePostDeletion}>Delete</button>
                </form>
            );
        } else {
            return (
                <div>nowhere</div>
            )
        }
        
    }
};

const mapDispatchToProps = dispatch => {

    return {
        updateUserPost : (updatedPost) => dispatch(updateUserPost(updatedPost)),
        deleteUserPost : (deletedPost) => dispatch(deleteUserPost(deletedPost))
    }
}

export default connect(null, mapDispatchToProps)(EditPost);