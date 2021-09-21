import { Component } from 'react';

class DataFetching extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.posts.map((post) => (<li key={post.id}>{post.title}</li>))
                    }
                </ul>
            </div>
        )
    }
}

export default DataFetching;