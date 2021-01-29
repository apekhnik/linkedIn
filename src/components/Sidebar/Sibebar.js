import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../features/appSlice";
import "./index.css";
const Sidebar = () => {
  const user = useSelector(getUser);
  console.log(user);
  const { displayName, email, photoURL } = user;
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://image.freepik.com/free-vector/gradient-wallpaper-background_1159-5356.jpg"
          alt=""
        />
        <Avatar src={photoURL}>{email[0]}</Avatar>
        <h2>{displayName}</h2>
        <h4>{email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed</p>
          <p className="sidebar__statNumber">228</p>
        </div>
        <div className="sidebar__stat">
          <p>View on post</p>
          <p className="sidebar__statNumber">228</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};
export default Sidebar;
