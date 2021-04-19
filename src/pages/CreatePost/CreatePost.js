import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import PostForm from "../../components/PostForm/PostForm";

import { pageTitle, SOME_API } from "../../constants";
import "../../App.scss";

const CreatePost = () => {
  const history = useHistory();
  const initId = history.location.state?.id;
  const initTitle = history.location.state?.title;
  const initText = history.location.state?.text;

  const [post, setPost] = useState({
    id: initId ? initId : null,
    text: initTitle ? initTitle : "",
    title: initText ? initText : "",
  });

  const onSave = async () => {
    const ENDPOINT = post.id ? SOME_API + post.id : SOME_API;
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: post.text,
          title: post.title,
        }),
      });
      if (response.ok) {
        history.push("/blog");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="app">
      <div className="header">
        <Header title={pageTitle} />
      </div>
      <div className="body">
        <PostForm
          title={post.title}
          onChangeTitle={(e) => setPost({ ...post, title: e.target.value })}
          text={post.text}
          onChangeText={(e) => setPost({ ...post, text: e.target.value })}
          onSave={onSave}
        />
      </div>
    </div>
  );
};

export default CreatePost;
