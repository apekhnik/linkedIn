import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import CloseIcon from "@material-ui/icons/Close";
import "./index.css";
import InputOptions from "../../inputOptions/InputOptions";
import { db } from "../../../firebase";
const Post = forwardRef((props, ref) => {
  const { name, description, message, photoUrl, id } = props;
  const del = (id) => {
    db.collection("posts")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="like" color="gray" />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
      <div className="post__close">
        <CloseIcon onClick={() => del(id)} />
      </div>
    </div>
  );
});
export default Post;
