import { Avatar } from "@material-ui/core";
import React from "react";
import "./index.css";
const HeaderOption = (props) => {
  const { Icon, title, avatar, onClick } = props;
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar src={avatar} className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};
export default HeaderOption;
