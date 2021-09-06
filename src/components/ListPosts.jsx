import { useEffect, useState } from 'react';

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  //https://jsonplaceholder.typicode.com/posts

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {(posts || []).map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
