import React from "react";
import "./Sidebar.css";
const Sidebar = ({ toggle, category, setCategory }) => {
  return (
    <aside className={toggle ? "active" : ""}>
      <ul className="side-bar-icons">
        <li className={category==1?"active":""} onClick={() => setCategory(1)}>
          <i className="fa fa-home"></i>
          <strong>Home</strong>
        </li>
        <li className={category==20?"active":""} onClick={() => setCategory(20)}>
          <i className="fa-solid fa-gamepad"></i>
          <strong>Gaming</strong>
        </li>
        <li className={category==2?"active":""} onClick={() => setCategory(2)}>
          <i className="fa-solid fa-car-side"></i>
          <strong>Automobiles</strong>
        </li>
        <li className={category==17?"active":""} onClick={() => setCategory(17)}>
          <i className="fa-solid fa-baseball"></i>
          <strong>Sports</strong>
        </li>
        <li className={category==24?"active":""} onClick={() => setCategory(24)}>
          <i className="fa-solid fa-tv"></i>
          <strong>Entertainment</strong>
        </li>
        <li className={category==28?"active":""} onClick={() => setCategory(28)}>
          <i className="fa-solid fa-gear"></i>
          <strong>Technology</strong>
        </li>
        <li className={category==10?"active":""} onClick={() => setCategory(10)}>
          <i className="fa-solid fa-headphones-simple"></i>
          <strong>Music</strong>
        </li>
        <li className={category==21?"active":""} onClick={() => setCategory(22)}>
          <i className="fa-brands fa-slack"></i>
          <strong>Blogs</strong>
        </li>
        <li className={category==23?"active":""} onClick={() => setCategory(23)}>
          <i className="fa-solid fa-clapperboard"></i>
          <strong>Comedies</strong>
        </li>
        <li className={category==25?"active":""} onClick={() => setCategory(25)}>
          <i className="fa-solid fa-newspaper"></i>
          <strong>News</strong>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
