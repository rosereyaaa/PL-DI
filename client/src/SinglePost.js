import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';

// const SinglePost = props => {
//     return <div>{JSON.stringify(props)}
//             </div>
// };

const SinglePost = () => {
    const [post, setPost] = useState('');
    let { slug } = useParams();
    console.log(slug);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/post/${slug}`)
            .then(response => setPost(response.data))
            // .then(response => console.log(response))
            .catch(error => alert('Error loading single post'));
    }, []);

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>{post.title}</h1>
            <p className="lead">{post.content}</p>
            <p>
                Author <span className="badge">{post.user}</span> Published on{' '}
                <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
            </p>
        </div>
    );
};
export default SinglePost;