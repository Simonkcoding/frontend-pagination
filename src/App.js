import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);
  // state= {posts=[]};
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const festchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    }

    festchPosts();

  }, []);

  const paginate = number => setCurrentPage(number);

  // console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const curretnPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mt-5">
      <div className="App">
        <h1 className="text-primary mb-3">App</h1>
        <Posts posts={curretnPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} paginate= {paginate} totalPosts={posts.length} />
      </div>
    </div>
  );
}

export default App;
