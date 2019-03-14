import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
    }

    render() {
        const postItems = this.state.posts.map(post => {
            return <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        })
        return (
            <div>
                <h1>Posts</h1>
                {postItems}

            </div>
        )
    }
}

export default Posts
