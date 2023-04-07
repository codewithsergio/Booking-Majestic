import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_icons">
        <a href="https://www.instagram.com/bookingmajestic/" target="_blank">
          <span
            className="iconify iconifySkills"
            data-icon="skill-icons:instagram"
          ></span>
        </a>
        <a href="https://www.facebook.com/bookingmajestic" target="_blank">
          <span
            className="iconify iconifySkills"
            data-icon="logos:facebook"
          ></span>
        </a>
        <a href="https://www.pinterest.com/bookingmajestic/" target="_blank">
          <span
            className="iconify iconifySkills"
            data-icon="logos:pinterest"
          ></span>
        </a>
        <a
          href="https://www.youtube.com/@majesticevents8852/featured"
          target="_blank"
        >
          <span
            className="iconify iconifySkills"
            data-icon="logos:youtube-icon"
          ></span>
        </a>
        <a href="https://twitter.com/bookingmajestic" target="_blank">
          <span
            className="iconify iconifySkills"
            data-icon="logos:twitter"
          ></span>
        </a>
      </div>
      <div className="middle_info"></div>
      <div className="legal">
        <p>Copyright &copy; 2023 MAJESTiC Event Entertainment</p>
      </div>
    </div>
  );
}

export default Footer;
