import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sibebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
