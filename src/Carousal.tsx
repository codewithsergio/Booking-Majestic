import "./Carousal.css";
import wedding1 from "./assets/wedding1.webp";
import dj1 from "./assets/dj1.webp";
import photobooth1 from "./assets/photobooth1.webp";
import party1 from "./assets/party1.webp";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Carousal() {
  let slideIndex: number = 1;
  let slideInterval: number;

  const plusSlides = (n: number) => {
    showSlides((slideIndex += n));
  };

  const currentSlide = (n: number) => {
    showSlides((slideIndex = n));
  };

  const showSlides = (n: number) => {
    let i: number;
    let slides: HTMLCollectionOf<Element> =
      document.getElementsByClassName("mySlides");
    let dots: HTMLCollectionOf<Element> =
      document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      (dots[i] as HTMLElement).className = (
        dots[i] as HTMLElement
      ).className.replace(" active", "");
    }
    (slides[slideIndex - 1] as HTMLElement).style.display = "block";
    (dots[slideIndex - 1] as HTMLElement).className += " active";

    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      plusSlides(1);
    }, 10000);
  };

  useEffect(() => {
    showSlides(1);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src={wedding1} />
        <div className="image_mid_text">
          <h1>PHOTOGRAPHY</h1>
          <p>Looking to capture those special moments?</p>
          <NavLink className="linkButton" to="contact">
            GET STARTED
          </NavLink>
        </div>
      </div>

      <div className="mySlides fade">
        <img src={dj1} />
        <div className="image_mid_text">
          <h1>DJ & KARAOKE</h1>
          <p>Looking to liven your event?</p>
          <NavLink className="linkButton" to="contact">
            GET STARTED
          </NavLink>
        </div>
      </div>

      <div className="mySlides fade">
        <img src={photobooth1} />
        <div className="image_mid_text">
          <h1>PHOTO BOOTH</h1>
          <p>Looking to capture memories of your event?</p>
          <NavLink className="linkButton" to="contact">
            GET STARTED
          </NavLink>
        </div>
      </div>

      <div className="mySlides fade">
        <img src={party1} />
        <div className="image_mid_text">
          <h1>CINEMATOGRAPHY</h1>
          <p>Looking to film your story?</p>
          <NavLink className="linkButton" to="contact">
            GET STARTED
          </NavLink>
        </div>
      </div>

      {/* The dots/circles */}
      <div className="dots">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
      </div>

      {/*Next and previous buttons*/}
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
    </div>
  );
}

export default Carousal;
