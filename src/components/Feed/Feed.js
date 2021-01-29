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
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { getUser } from "../../features/appSlice";
const Feed = () => {
  const [textInput, setTextInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(getUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((spanshot) =>
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
      name: user.displayName,
      description: user.email,
      message: textInput,
      photoUrl: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTextInput("");
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
      <FlipMove>
        {posts.map(({ id, data }) => {
          return (
            <Post
              id={id}
              key={id}
              name={data.name}
              description={data.description}
              message={data.message}
              photoUrl={data.photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};
export default Feed;
