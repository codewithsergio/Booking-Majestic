import "./Cinematography.css";
import fancy_curl from "./assets/fancy_curl.webp";
import kiss1ss from "./assets/images/kiss1ss.png";
import dance1 from "./assets/images/dance1.webp";
import kiss2ss from "./assets/images/kiss2ss.png";
import videoweddingss from "./assets/images/videoweddingss.png";
import drone1ss from "./assets/images/drone1ss.png";
import tree1ss from "./assets/images/tree1ss.png";
import shadowback from "./assets/shadow-back.png";
import dance1ss from "./assets/images/dance1ss.png";

function Cinematography() {
  return (
    <div className="cinematography">
      <img src={fancy_curl} />
      <div className="imgGroup">
        <h1>The Wedding of Mark + Liza</h1>
        <a href="https://www.youtube.com/watch?v=sKuCBbBX90Q" target="_blank">
          <img src={kiss1ss} />
        </a>
        <h1>Fatima's Quinceanera</h1>
        <a href="https://www.youtube.com/watch?v=cB4s1gziO6Q" target="_blank">
          <img src={dance1ss} />
        </a>
        <h1>The Wedding of Will + Amira</h1>
        <a href="https://www.youtube.com/watch?v=jrSD5XCTejE" target="_blank">
          <img src={kiss2ss} />
        </a>
        <h1>The Wedding of David + Aeri</h1>
        <a href="https://www.youtube.com/watch?v=AHq9H9dHCVI" target="_blank">
          <img src={videoweddingss} />
        </a>
        <h1>Giah's Bat Mitzvah</h1>
        <a href="https://www.youtube.com/watch?v=jRQpDBoJ5jI" target="_blank">
          <img src={tree1ss} />
        </a>
        <h1>WALTER + JUDITH Drone Footage</h1>
        <a href="https://www.youtube.com/watch?v=tM8CG03Buag" target="_blank">
          <img src={drone1ss} />
        </a>
      </div>
      <button>BOOK A CINEMATOGRAPHER</button>
    </div>
  );
}

export default Cinematography;
