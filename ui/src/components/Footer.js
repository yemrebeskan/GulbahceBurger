import { useState } from "react";
import phoneEmblem from "./footerPictures/phone_emblem.jpg";
import instaEmblem from "./footerPictures/instagram_emblem.webp";
import twitEmblem from "./footerPictures/twitter_emblem.jpg";
import mailEmblem from "./footerPictures/mail_emblem.png";
import locationPic from "./footerPictures/fake_map_location.png";
import "./Footer.css";

const Footer = () => {
  const [toggleContactInfo, setToggleContactInfo] = useState(false);
  const [toggleLocation, setToggleLocation] = useState(false);
  const openLocationPart = () => {
    setToggleLocation((prevState) => !prevState);
    if (toggleContactInfo) {
      setToggleContactInfo(false);
    }
  };
  const openContactInfo = () => {
    if (toggleLocation) {
      setToggleLocation(false);
    }
    setToggleContactInfo((prevState) => !prevState);
  };
  return (
    <footer class="footer">
      <ul class="footer-info">
        <li class="contact-info-link">
          <button
            class={
              toggleContactInfo
                ? "contact-info opened-contact-info"
                : "contact-info"
            }
            onClick={openContactInfo}
          >
            Contact Info
          </button>
        </li>
        <li class="location-link">
          <button
            class={toggleLocation ? "location opened-location" : "location"}
            onClick={openLocationPart}
          >
            Location
          </button>
        </li>
      </ul>
      {toggleContactInfo && (
        <div>
          <div className="contact-info-elements">
            <div class="contact-info-element">
              <img class="contact-info-image" src={phoneEmblem} />
              <p class="contact-info-title">+90 123 456 7788</p>
            </div>
            <div class="contact-info-element">
              <img class="contact-info-image" src={instaEmblem} />
              <p class="contact-info-title">instagram.com/gbahceburger</p>
            </div>
            <div class="contact-info-element">
              <img class="contact-info-image" src={twitEmblem} />
              <p class="contact-info-title">twitter.com/gbahceburger</p>
            </div>
            <div class="contact-info-element">
              <img class="contact-info-image" src={mailEmblem} />
              <p class="contact-info-title">gbahceburger@mail.com</p>
            </div>
          </div>
        </div>
      )}
      {toggleLocation && (
        <div className="location-element">
          <div className="address">
            <p className="address-title">Adress:</p>
            <p className="open-address">12087 Sk. Gülbahçe/Urla/İzmir</p>
          </div>
          <img src={locationPic} className="location-image" />
        </div>
      )}
    </footer>
  );
};

export default Footer;
