import { NavLink } from "react-router-dom";
import "./Dj.css";
import fancy_curl from "./assets/fancy_curl.webp";
import djzerj1 from "./assets/images/djzerj1.png";
import djzerj2 from "./assets/images/djzerj2.webp";

function Dj() {
  return (
    <div className="dj">
      <img src={fancy_curl} />
      <h1>DJ, MC & KARAOKE</h1>
      <div className="imgGroup">
        <a
          href="https://www.youtube.com/watch?v=E_NF1Zvbfbo&list=TLGGqUQqJOWuhP8yNzAzMjAyMw"
          target="_blank"
        >
          <img src={djzerj1} />
        </a>
        <img src={djzerj2} />
      </div>
      <p>
        Majestic DJ's provides the finest DJ Service and Sound. We specialize in
        top-notch DJ/MC entertainment services for wedding ceremonies, wedding
        receptions, birthday parties, school dances, corporate events, house
        parties, galas, holiday parties, Bar and Bat Mitzvah we can provide you
        a one-of-a-kind experience.
      </p>
      <p>
        We can also enhance your event with dance floor party lighting,
        beautiful up-lighting or our signature monogram service. We also offer
        projector/screen service and Karaoke service for the guests to sing
        along with their favorite music, choosing among over 150,000 songs,
        click here for karaoke song list.
      </p>
      <p>
        Have more questions or ready to book? We'd be delighted to talk with
        you. Basic packages start at $350 schedule a free no-pressure
        consultation click here to contact us today!
      </p>
      <NavLink id="lets_start" to="../contact">
        BOOK A DJ
      </NavLink>
    </div>
  );
}

export default Dj;
