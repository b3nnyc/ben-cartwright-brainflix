import "./Nav.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Nav() {
  return (
    <section className="nav">
      <img className="nav__logo" src={logo} alt="BrainFlix logo"></img>
      <div className="nav__middle">
        <input className="nav__search" type="text" placeholder="Search"></input>
        <img className="nav__avatar-mobile" src={avatar}></img>
      </div>
      <button className="nav__button" type="submit">
        UPLOAD
      </button>
      <img className="nav__avatar-desktop" src={avatar}></img>
    </section>
  );
}

export default Nav;
