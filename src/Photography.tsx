import fancy_curl from "./assets/fancy_curl.webp";
import ring1 from "./assets/images/ring1.webp";
import steph1 from "./assets/images/steph1.webp";
import table1 from "./assets/images/table1.webp";
import wedding2 from "./assets/images/wedding2.webp";
import wedding3 from "./assets/images/wedding3.webp";
import wedding4 from "./assets/images/wedding4.webp";
import wedding5 from "./assets/images/wedding5.webp";
import wedding6 from "./assets/images/wedding6.webp";
import wedding7 from "./assets/images/wedding7.webp";
import "./Photography.css";

function Photography() {
  return (
    <div className="photography">
      <img src={fancy_curl} />
      <h1>PHOTOGRAPHY</h1>
      <div className="grid3by3">
        <img src={steph1} />
        <img src={wedding2} />
        <img src={wedding3} />
        <img src={wedding4} />
        <img src={wedding5} />
        <img src={wedding6} />
        <img src={wedding7} />
        <img src={ring1} />
        <img src={table1} />
      </div>
      <div></div>
      <p>
        Majestic Photography can accommodate virtually any budget, from simple
        and casual to elegant and extravagant. We have been documenting weddings
        for over 10 years. Our style of photography is modern and romantic.
        Basic photography packages start at $500 click here to contact us for a
        free consultation!
      </p>
      <button>BOOK A PHOTOGRAPHER</button>
    </div>
  );
}

export default Photography;
