import React, { useEffect, useState } from 'react';

function DataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <ul>
                {
                    posts.map((post) => (<li key={post.id}>{post.id}</li>))
                }
            </ul>
        </div>
    )
}

export default DataFetching
