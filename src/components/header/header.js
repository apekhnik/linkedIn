import React from "react";
import "./index.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOptions";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationIcon} />
        <HeaderOption
          title="Me"
          avatar="https://sun2-4.userapi.com/impf/c633923/v633923640/128ce/cVGD03-9wwk.jpg?size=200x0&quality=96&crop=542,373,1515,1515&sign=77a74306caa74324233d6a02fb89c584&ava=1"
        />
      </div>
    </div>
  );
};
export default Header;
