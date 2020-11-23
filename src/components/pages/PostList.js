import React, { Component } from 'react';

class PostList extends Component {
    state = {
        posts: [],
        loading: true
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => this.setState({ posts: data, loading: false }))
    }
    render() {
        console.log(this.state.posts)
        return (
            <div>
                PostList
                {this.state.loading || !this.state.posts ? (<p>Loading...</p>) :
                    (
                        <div>
                            {this.state.posts.map(post => (
                                <p>
                                    ID: {post.id}<br />
                                    User ID: {post.userId}<br />
                                    Title: {post.title}<br />
                                    Body: {post.body}<br />
                                </p>
                            ))}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default PostList;