import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sibebar";
import { getUser } from "./features/appSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/appSlice";
import Widgets from "./components/Widgets/Widgets";
function App() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth.email);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else dispatch(logout());
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
