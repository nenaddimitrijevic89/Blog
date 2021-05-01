import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { postsService } from "../../services/postsService";
import { Post } from "./Post";
import style from "./Posts.module.css";
import { Container } from "react-materialize";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    postsService
      .getPosts()
      .then((data) => {
        setPosts(data.slice(0, 20));
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="posts">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h4 className={style.title}>
            <i className="fa fa-file-text"></i> Posts
          </h4>
          <Container>
            {posts.map((post) => (
              <Link to={`/posts/singlepost/${post.id}`} key={post.id}>
                <Post key={post.id} id={post.id} title={post.title} />
              </Link>
            ))}
          </Container>
        </>
      )}
    </div>
  );
};
export { Posts };
