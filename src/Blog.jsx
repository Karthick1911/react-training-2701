import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [click2]);

  console.log(posts);
  console.log(posts.length);
  return (
    <>
      <button type="button" onClick={() => setClick((prevState) => !prevState)}>
        Button
      </button>
      <button
        type="button"
        onClick={() => setClick2((prevState2) => !prevState2)}
      >
        Refresh Post
      </button>
      {posts && posts.length === 0 && <p>No Post Found</p>}
      {posts && posts.length > 0 && <Posts posts={posts} />}
    </>
  );
};

const Posts = (props) => {
  return (
    <>
      {props.posts.map((post) => {
        return (
          <div class="card">
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
