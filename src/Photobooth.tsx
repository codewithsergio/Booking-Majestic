import "./Photobooth.css";
import fancy_curl from "./assets/fancy_curl.webp";
import photoboothmain from "./assets/images/photoboothmain.webp";
import pb1 from "./assets/images/photobooth1.webp";
import pb2 from "./assets/images/photobooth2.webp";
import pb3 from "./assets/images/photobooth3.webp";
import pb4 from "./assets/images/photobooth4.webp";
import pb5 from "./assets/images/photobooth5.webp";
import pb6 from "./assets/images/photobooth6.webp";
import pb7 from "./assets/images/photobooth7.webp";
import pb8 from "./assets/images/photobooth8.webp";
import pb9 from "./assets/images/photobooth9.webp";
import pb10 from "./assets/images/photobooth10.webp";
import pb11 from "./assets/images/photobooth11.webp";
import pb12 from "./assets/images/photobooth12.webp";
import open from "./assets/images/open.webp";
import enclosed from "./assets/images/enclosed.webp";
import layout2x6 from "./assets/images/layout2x6.webp";
import layout4x6 from "./assets/images/layout4x6.webp";
import HorizontalLine from "./reusable/HorizontalLine";
import { NavLink } from "react-router-dom";

function Photobooth() {
  return (
    <div className="photobooth">
      <img src={fancy_curl} />
      <h1>PHOTO BOOTH</h1>
      <div className="imgGroup">
        <img src={photoboothmain} />
        <div className="grid3">
          <img src={pb1} />
          <img src={pb2} />
          <img src={pb3} />
          <img src={pb4} />
          <img src={pb5} />
          <img src={pb6} />
          <img src={pb7} />
          <img src={pb8} />
          <img src={pb9} />
          <img src={pb10} />
          <img src={pb11} />
          <img src={pb12} />
        </div>
      </div>
      <HorizontalLine />
      <div className="photobooth-options">
        <h1>PHOTO BOOTH TYPES</h1>
        <div>
          <div>
            <img src={open} />
            <div className="yellowDivText">OPEN AIR BOOTH</div>
          </div>
          <div>
            <img src={enclosed} />
            <div className="yellowDivText">ENCLOSED BOOTH</div>
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div className="photobooth-options">
        <h1>LAYOUT OPTIONS</h1>
        <div>
          <div>
            <img src={layout2x6} />
            <div className="fancyDivText">2x6 Photo Strip</div>
          </div>
          <div>
            <img src={layout4x6} />
            <div className="fancyDivText">4x6 Single Photos</div>
          </div>
        </div>
      </div>
      <NavLink id="lets_start" to="../contact">
        BOOK A PHOTO BOOTH
      </NavLink>
    </div>
  );
}

export default Photobooth;
