
import "./Navbar.css";
import Logo from "/src/assets/logo.png";
import User from "/src/assets/user.jpg";
import { Link } from "react-router-dom";
const Navbar = ({ setToggle, toggle }) => {
 
  return (
    <header>
      <nav>
        <div className="logo">
          <i className="fa fa-bars" onClick={() => setToggle(!toggle)}></i>
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="search">
          <div className="search-box">
            <input type="text" placeholder="Search"/>
            <i className="fa fa-search"></i>
          </div>
          <div className="mic-icon">
            <i className="fa-solid fa-microphone"></i>
            <div>Search with your voice</div>
          </div>
        </div>
        <div className="icons">
          <div className="camera-icon">
            <i className="fa-solid fa-video"></i>
            <div>Create</div>
          </div>
          <div className="notify-icon">
            <i className="fa-solid fa-bell"></i>
            <div>Notifications</div>
          </div>
          <div className="user-icon">
            <img src={User} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
