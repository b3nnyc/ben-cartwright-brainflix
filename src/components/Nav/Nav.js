import "./Nav.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <section className="nav">
      <a><img className="nav__logo" src={logo} alt="BrainFlix logo"></img></a>
      <div className="nav__middle">
        <input className="nav__search" type="text" placeholder="Search"></input>
        <img className="nav__avatar-mobile" src={avatar}></img>
      </div>
      <Link to={`/upload/`}>
        <button className="nav__button" type="submit">
          UPLOAD
        </button>
      </Link>
      <img className="nav__avatar-desktop" src={avatar}></img>
    </section>
  );
}

export default Nav;
