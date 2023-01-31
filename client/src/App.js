import React, { useState, useEffect } from 'react';
import Create from "./Create";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Tool from './Tool';
import axios from 'axios';
// const App = () => (
//   <div>
//     <Nav />
//     <h1>MERN CRUDS</h1>
//   </div>
// );
const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(error => alert('Error fetching posts'));
  };

  const deleteConfirm = slug => {
    let answer = window.confirm('Are you sure you want to delete this post?');
    if (answer) {
      deletePost(slug);
    }
  };

  const deletePost = slug => {
    // console.log('delete', slug, ' post');
    axios
      .delete(`${process.env.REACT_APP_API}/post/${slug}`)
      .then(response => {
        alert(response.data.message);
        fetchPosts();
      })
      .catch(error => alert('Error deleting post'));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container pb-5">
      <Nav />
      <br />
      <h1>MERN CRUD</h1>
      <hr />
      {posts.map((post, i) => (
        <div className="row" key={post._id} style={{ borderBottom: '1px solid silver' }}>
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <Link to={`/post/${post.slug}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p className="lead">{post.content.substring(0, 100)}</p>
                <p>
                  Author <span className="badge">{post.user}</span> Published on{' '}
                  <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
                </p>
              </div>
              <div className="col-md-2">
                <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning">
                  Update
                </Link>
                <button onClick={() => deleteConfirm(post.slug)}
                  className="btn btn-sm btn-outline-danger ml-1">Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};



// function App() {
//   return (
//     <div className="App">
//       <Tool name={"james"} tool={"js"} lastname={"james2"} />
//     </div>
//   )
// }
export default App;