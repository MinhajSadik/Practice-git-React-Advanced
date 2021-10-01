import React, { useEffect, useState } from 'react';

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => res.json())
        .then(data => setPost(data))

    }, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => setIdFromButtonClick(handleClick)}>Fetch Post</button>
            {/* <ul>
                {
                    posts.map((post) => (<li key={post.id}>{post.id}</li>))
                }
            </ul> */}
            <div>{post.title}</div>

        </div>
    )
}

export default DataFetching
