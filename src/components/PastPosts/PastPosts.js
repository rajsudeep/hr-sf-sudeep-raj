import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import classes from "./PastPosts.module.scss";

export const PastPostTitle = ({ id, title, timestamp }) => (
  <div className={classes.postTitle} id={id}>
    {moment(timestamp).local().format("DD MMM YYYY")} - {title}
  </div>
);

const PastPosts = ({ posts, sectionTitle, createPostTitle }) => {
  const history = useHistory();
  return (
    <div className={classes.container}>
      <h2 className={classes.subheader}>{sectionTitle}</h2>
      <div className={classes.posts}>
        {posts?.map(({ id, title, timestamp }) => (
          <PastPostTitle id={id} title={title} timestamp={timestamp} />
        ))}
      </div>
      <p className={classes.create} onClick={() => history.push("/create")}>
        {createPostTitle}
      </p>
    </div>
  );
};

export default PastPosts;
