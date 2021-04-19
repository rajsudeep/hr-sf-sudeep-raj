import React from "react";
import moment from "moment";

import { editBtnText, deleteBtnText } from "../../constants";
import classes from "./DetailedPosts.module.scss";

export const PostDetailsBlock = ({
  id,
  title,
  timestamp,
  text,
  onClickDelete,
  onClickEdit,
}) => (
  <div className={classes.postContainer} id={id}>
    <div className={classes.header}>
      <p className={classes.title}>{title}</p>
      <p className={classes.title}>
        {/* handle the warning! */}
        {moment(timestamp).local().format("DD MMM YYYY")}
      </p>
    </div>
    <p className={classes.text}>{text}</p>
    <div className={classes.editBtn}>
      <p onClick={onClickDelete}>{deleteBtnText}</p>
      <p onClick={() => onClickEdit(id, title, text)}>{editBtnText}</p>
    </div>
  </div>
);

const DetailedPosts = ({ posts, onClickDelete, onClickEdit }) => (
  <div className={classes.posts}>
    {posts?.map(({ id, title, timestamp, text }) => (
      <PostDetailsBlock
        id={id}
        title={title}
        timestamp={timestamp}
        text={text}
        onClickDelete={() => onClickDelete(id)}
        onClickEdit={onClickEdit}
      />
    ))}
  </div>
);

export default DetailedPosts;
