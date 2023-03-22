import MajesticLogo from "./assets/MajesticLogo.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav_bar">
      <div className="logo_w_links">
        <div className="logo_call">
          <NavLink to="/">
            <img id="logo" src={MajesticLogo} alt="majestic logo" />
          </NavLink>
          <p className="nav_call">CALL NOW: 323.392.8077</p>
        </div>
        <div id="contact_ham">
          <a></a>
          <button id="contact_button">CONTACT US</button>
          <div id="ham_nav">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="links" id="main-nav">
              <li>
                <NavLink to="photography">PHOTOGRAPHY</NavLink>
              </li>
              <li>
                <a href="news.asp">CINEMATOGRAPHY</a>
              </li>
              <li>
                <a href="contact.asp">PHOTO BOOTH</a>
              </li>
              <li>
                <a href="about.asp">DJ & MC</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
