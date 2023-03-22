import fancy_curl from "./assets/fancy_curl.webp";
import "./Services.css";

function Services() {
  return (
    <div className="professional_services">
      <h1>PROFESSIONAL EVENT SERVICES</h1>
      <img src={fancy_curl} />
      <div className="professional_details">
        <p>
          Welcome to MAJESTIC Events, A full-time
          <span> Photography, Cinematography, Photo Booth & DJ</span> company.
          Celebrating over 10 years of excellence. We offer open or enclosed
          Photo Booth booth, Professional DJ, Karaoke, EMCEE, Photography &
          Cinematography service for weddings, sweet sixteens, Bat Mitzvah,
          corporate, house parties and many other functions.
        </p>
        <p>
          Our mission is to provide our clients quality service they deserve and
          more. With more than 10 years in the entertainment industry, it shows
          through our performance, we love what we do!
        </p>
        <p>
          No event is too large or too small for us, so don't hesitate to get in
          touch with us no matter what you're planning for.
        </p>
        <p>Your satisfaction is important to us book your event today!</p>
      </div>
      <button>LET'S GET STARTED</button>
    </div>
  );
}

export default Services;
