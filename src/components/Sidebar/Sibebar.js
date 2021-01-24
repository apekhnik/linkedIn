import { Avatar } from "@material-ui/core";
import React from "react";
import "./index.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sibebar__top">
        <img src="" alt="" />
        <Avatar src="https://sun2-4.userapi.com/impf/c633923/v633923640/128ce/cVGD03-9wwk.jpg?size=200x0&quality=96&crop=542,373,1515,1515&sign=77a74306caa74324233d6a02fb89c584&ava=1" />
        <h2>Alex Pekhnik</h2>
        <h4>aphk@gmail.com</h4>
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
      <div className="sibebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};
export default Sidebar;
