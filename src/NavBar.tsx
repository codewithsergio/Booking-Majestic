import MajesticLogo from "./assets/MajesticLogo.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isChecked, setIsChecked] = useState(false);

  function handleNavLinkClick() {
    setIsChecked(false);
  }
  return (
    <div className="nav_bar">
      <div className="logo_w_links">
        <div className="logo_call">
          <NavLink to="/">
            <img id="logo" src={MajesticLogo} alt="majestic logo" />
          </NavLink>
          <p className="nav_call">CALL NOW: 714.864.6128</p>
        </div>
        <div id="contact_ham">
          <a></a>
          <NavLink id="contact_button" to="contact">
            CONTACT US
          </NavLink>
          <div id="ham_nav">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span></span>
            <span></span>
            <span></span>
            <ul className="links" id="main-nav">
              <li>
                <NavLink to="photography" onClick={handleNavLinkClick}>
                  PHOTOGRAPHY
                </NavLink>
              </li>
              <li>
                <NavLink to="cinematography" onClick={handleNavLinkClick}>
                  CINEMATOGRAPHY
                </NavLink>
              </li>
              <li>
                <NavLink to="photobooth" onClick={handleNavLinkClick}>
                  PHOTO BOOTH
                </NavLink>
              </li>
              <li>
                <NavLink to="dj" onClick={handleNavLinkClick}>
                  DJ & MC
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
