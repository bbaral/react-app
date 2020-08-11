import React, {Component} from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {

        loadedPosts: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id) {
            if (!this.state.loadedPosts || (this.state.loadedPosts && this.state.loadedPosts.id !== this.props.id)) {

                const fullPostGET = axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id);
                fullPostGET.then(response => {
                    this.setState({loadedPosts: response.data})
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }

    deletePostHandler = () => {
        if (this.props.id) {
            const deleteRequest = axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id);

            deleteRequest.then(response => {
                console.log(response);
            }).catch(err => {
                console.log(err);
            });
        }

    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }

        if (this.state.loadedPosts) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPosts.title}</h1>
                    <p>{this.state.loadedPosts.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;
