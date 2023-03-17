import axios from "axios";

import React, { useEffect, useState } from "react";
import "../css/Posts.css";

function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://61bc10bdd8542f001782451e.mockapi.io/Posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // like post

  const [liked, setLiked] = useState(Posts.liked);

  const handleLike = async () => {
    try {
      const response = await axios.post(
        `https://61bc10bdd8542f001782451e.mockapi.io/Posts/${Posts.id}/posts_Like`
      );
      const updatedPost = response.data;
      setLiked(updatedPost.liked);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="post_Container">
      {data.map((Posts) => (
        <div key={Posts.id}>
          <div className="post">
            <div className="header_Post">
              <div className="user_Img">
                <img
                  src="https://notagamer.net/wp-content/uploads/2022/01/maxresdefault-1-1024x576.jpg"
                  alt=""
                ></img>
              </div>

              <p className="user_Name">Nguyen Bui Tai</p>
              <p className="posts_Time">{Posts.posts_Time}</p>
              <div className="add_Icon">
                <i className="fa-solid fa-user-plus"></i>
              </div>
            </div>

            <div className="body_Post">
              <p className="post_Caption">{Posts.posts_Caption}</p>
              <div className="post_Img">
                <img src={`${Posts.posts_Image}`} alt=""></img>
              </div>
            </div>

            <div className="footer_Post">
              <div>
                <button onClick={handleLike}>
                  {liked ? "Unlike" : "Like"}
                  <i className="fa-solid fa-heart"></i>
                  <p>{Posts.posts_Like}</p>
                </button>
              </div>
              <div>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
