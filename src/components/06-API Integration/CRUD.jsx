import React, {useEffect, useState} from 'react';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

const CRUD = () => {
  const [post, setPost] = useState();
  let postsData;

  useEffect(() => {
    // To fetch data or retrieve it, make a GET request
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  const createPost = () => {
    // To create new data, make a POST request
    axios.post(baseURL, {title: 'New Title', body: 'New Body'}).then((response) => {
      setPost(response.data);
    });

    /* Use a .then() callback to get back the response data 
    and replace the first post you got with the new post you requested. */
  };

  const updatePost = () => {
    /* To update a given resource, make a PUT request.
    In this case, you'll update the first post. */
    
    axios
      .put(`${baseURL}/1`, {title: 'Updated Title', body: 'Updated Body'})
      .then((response) => {
        setPost(response.data);
      });
  };

  const deletePost = () => {
    // Finally, to delete a resource, use the DELETE method.
    // Note that you do not need a second argument whatsoever to perform this request

    axios.delete(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  };

  if (!post) return null;
  else if (post.length > 1) {
    postsData = post.map((data) => (
      <li className="list-group-item" key={data.id}>
        {data.title}
      </li>
    ));
  } else {
    postsData = (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    );
  }

  return (
    <div>
      <button type="button" className="btn btn-success mb-4 mr-4" onClick={createPost}>
        Create Post
      </button>
      <button type="button" className="btn btn-warning mb-4 mr-4" onClick={updatePost}>
        Update Post
      </button>
      <button type="button" className="btn btn-danger mb-4 mr-4" onClick={deletePost}>
        Delete Post
      </button>
      <ul className="list-group">{postsData}</ul>
    </div>
  );
};

export default CRUD;
