import { useEffect, useState } from "react";
import "./post.css";
function Post(props) {
  const { userID, userList } = props;
  let user = {};
  userList.map((obj) => {
    if (obj.id === userID) {
      user = obj;
    }
  });
  const [post, setpost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
      .then((res) => res.json())
      .then((result) => {
        setpost(result);
      });
  }, []);
  let initial = "";
  if (user.name) {
    const name = user.name.split(" ");
    const firstInitial = name[0].split("")[0];
    const lastInitial = name[1].split("")[0];
    initial = firstInitial + lastInitial;
  }
  return (
    <div className="post">
      <div className="post-title">
        <div>Post</div>
        <div className="user-name-container">
          <div className="user-initial">{initial}</div>
          <div className="user-name ">{user.name}</div>
        </div>
      </div>
      <div className="post-info">
        {post.map((post) => {
          return (
            <div key={post.id} className="post-container">
              <div className="post-heading">{post.title}</div>
              <div className="post-body">{post.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
