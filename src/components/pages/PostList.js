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
                        <>
                            {this.state.posts.map(post => (
                                <p style={{
                                    border: "solid",
                                    borderWidth: 2,
                                    borderRadius: 4,
                                    padding: 4,
                                    backgroundColor: "#9bed98"
                                }}>
                                    ID: {post.id}<br />
                                    User ID: {post.userId}<br />
                                    Title: {post.title}<br />
                                    Body: {post.body}<br />
                                </p>
                            ))}
                        </>
                    )
                }
            </div>
        )
    }
}

export default PostList;