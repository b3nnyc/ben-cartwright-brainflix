import "./Nav.scss"
import logo from "../../assets/images/BrainFlix-logo.svg"

function Nav() {
    return (
        <section className="nav">
            <img 
            className="nav__logo" 
            src={logo}
            alt="BrainFlix logo"></img>
            <input className="nav__search" type="text" placeholder="Search"></input>
            <button className="nav__button" type="submit">UPLOAD</button>
            <div className="nav__avatar"></div>
        </section>
    )
}

export default Nav