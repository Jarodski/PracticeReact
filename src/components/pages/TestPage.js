import React, { Component } from 'react';

class TestPage extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                TestPage
                <button>Hello</button>
            </div>
        )
    }
}

export default TestPage;