import { useEffect, useState } from 'react';

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  //https://jsonplaceholder.typicode.com/posts
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        <li>post title</li>
      </ul>
    </div>
  );
}
