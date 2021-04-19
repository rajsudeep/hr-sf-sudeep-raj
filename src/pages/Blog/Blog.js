import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import PastPosts from "../../components/PastPosts/PastPosts";
import DetailedPosts from "../../components/DetailedPosts/DetailedPosts";

import "../../App.scss";
import * as t from "../../constants";

function App() {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  const onClickDelete = useCallback(async (id) => {
    try {
      const response = await fetch(t.SOME_API + id, {
        method: "DELETE",
      });
      if (response.ok) {
        fetch(t.SOME_API)
          .then((res) => res.json())
          .then((data) => {
            setPosts(data);
          });
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickEdit = (id, title, text) => {
    history.push({
      pathname: "/create",
      state: {
        id,
        title,
        text,
      },
    });
  };

  useEffect(() => {
    fetch(t.SOME_API)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [onClickDelete]);

  return (
    <div className="app">
      <div className="header">
        <Header title={t.pageTitle} />
      </div>
      <div className="body">
        <div className="past">
          <PastPosts
            sectionTitle={t.sectionTitle}
            createPostTitle={t.createPostTitle}
            posts={posts}
          />
        </div>
        <div className="divider" />
        <div className="detailed">
          <DetailedPosts
            posts={posts}
            onClickDelete={(id) => onClickDelete(id)}
            onClickEdit={(id, title, text) => onClickEdit(id, title, text)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
