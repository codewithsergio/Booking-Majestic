import "./Clients.css";
import ASC from "./assets/ASC.webp";
import hilton from "./assets/hilton.webp";
import zimmer from "./assets/zimmer.webp";
import ritz from "./assets/ritz.webp";
import canada from "./assets/canada.webp";
import banquet from "./assets/banquet.webp";
import radisson from "./assets/radisson.webp";
import chase from "./assets/chase.png";
import tipsy from "./assets/tipsy.png";
import wines from "./assets/wines.png";
import fancy_curl from "./assets/fancy_curl.webp";

function Clients() {
  return (
    <div className="happy_clients">
      <h2>DEDICATED TO EXCELLENCE</h2>
      <h1>HAPPY CLIENTS</h1>
      <img className="curl" src={fancy_curl} />
      <div className="trusted_icons">
        <img src={ASC} />
        <img src={hilton} />
        <img src={tipsy} />
        <img src={ritz} />
        <img src={canada} />
        <img src={wines} />
        <img src={banquet} />
        <img src={radisson} />
      </div>
    </div>
  );
}

export default Clients;
