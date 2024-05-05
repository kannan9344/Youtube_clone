import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Video from "./Components/Video/Video";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar setToggle={setToggle} toggle={toggle}/>
      <Routes>
        <Route path={"/"} element={<Home toggle={toggle}/>} />
        <Route path={"/Video/:category_id/:id/:channel_id"} element={<Video/>} />
      </Routes>
    </>
  );
}

export default App;
