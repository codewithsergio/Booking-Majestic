import "./ThankYou.css";

function ThankYou() {
  return (
    <div className="thankyou">
      <span
        className="iconify iconifySkills"
        data-icon="game-icons:check-mark"
      ></span>
      <h1>Thank You!</h1>
      <h3>Your form was successfully submitted.</h3>
      <h4>We'll contact you as soon as possible.</h4>
    </div>
  );
}

export default ThankYou;
