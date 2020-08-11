import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        getStorePost: [],
        selectedId: null,
        err: false,
        errorMessage: ''
    }

    componentDidMount() {
        const getPost = axios.get('https://jsonplaceholder.typicode.com/postss');

        getPost.then((response) => {
            const limit = response.data.slice(0, 4);
            const updateData = limit.map(x => {
                return {
                   ...x,
                   author: 'Jack'
                }
            })

            this.setState({getStorePost: updateData});
            console.log(response)
        }).catch(err => {
            console.log(err.toString());
            this.setState({err: true, errorMessage: err.toString()});
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedId: id})
    }

    render () {
        let dataPost = <p style={{textAlign: 'center'}}>{this.state.errorMessage}</p>

        if (!this.state.err) {
            dataPost = this.state.getStorePost.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    click={() => this.postSelectedHandler(post.id)} />
            });
        }


        return (
            <div>
                <section className="Posts">
                    {dataPost}
                </section>
                <section>
                    <FullPost
                        id={this.state.selectedId} value={this.state.getStorePost.body} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
