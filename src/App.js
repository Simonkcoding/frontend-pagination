import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import axios from 'axios';
import './App.css';

function App() {

  const [posts,setPosts] = useState([]);
  // state= {posts=[]};
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(()=>{
    const festchPosts = async ()=>{
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    }

    festchPosts();

  },[]);

  console.log(posts);

  return (
    <div className="container mt-5">
    <div className="App">
      <h1 className= "text-primary mb-3">App</h1>
      <Posts posts={posts} loading={loading}/>
    </div>
    </div>
  );
}

export default App;
