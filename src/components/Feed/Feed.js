import React, { useEffect, useState } from "react";
import "./index.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post/Post";
import InputOptions from "../inputOptions/InputOptions";
import { db } from "../../firebase";
import firebase from "firebase";
const Feed = () => {
  const [textInput, setTextInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((spanshot) =>
      setPosts(
        spanshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Alex",
      description: "cool guy",
      message: textInput,
    });

    setTextInput("");
  };
  const del = () => {
    db.collection("posts")
      .doc("JVUfEeDq6Kyl5HXehYmM")
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data }) => {
        return (
          <Post
            name={data.name}
            description={data.description}
            message={data.message}
          />
        );
      })}
      <button onClick={del}>DELETE</button>
    </div>
  );
};
export default Feed;
