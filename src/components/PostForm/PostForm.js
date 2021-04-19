import React from "react";

import { newPostTitles } from "../../constants";
import classes from "./PostForm.module.scss";

const PostForm = ({ title, onChangeTitle, text, onChangeText, onSave }) => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <p className={classes.title}>{newPostTitles.header}</p>
        <div className={classes.inputContainer}>
          <p className={classes.valueTitle}>{newPostTitles.title}: </p>
          <input
            id="title"
            name="title"
            className={classes.titleInput}
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div className={classes.inputContainer}>
          <p className={classes.valueTitle}>{newPostTitles.text}</p>
          <input
            id="text"
            name="text"
            className={classes.textInput}
            value={text}
            onChange={onChangeText}
          />
        </div>
        <div className={classes.btnContainer}>
          <button
            className={classes.btn}
            onClick={onSave}
            title={newPostTitles.btnText}
          />
        </div>
      </div>
    </div>
  );
};

export default PostForm;
