import React from "react";
import "./Contact.css";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.svg";
import text1 from "../../assets/text1.png";
import text12 from "../../assets/text12.png";

const Contact = () => {
  return (
    <div className="contact container overflow-hidden">
      <div className="header row g-0">
        <div className="col object-fit-fill"><img className="text1 object-fit-fill" src={text1} alt="line" /></div>
        <div className="col-5"><h2 className="head">Bize Ulaşın!</h2></div>
        <div className="col object-fit-fill"><img className="text12 object-fit-fill" src={text12} alt="line2" /></div>
      </div>

      <div className="container logolar">
        <div className="row">
         
          <div className="col ">
            <a href="https://www.instagram.com/yazilimkonyamaarif/">
              <img className="instagram" src={instagram} alt="instagram" />
            </a>
          </div>

          <div className="col">
            <a href="https://www.linkedin.com/company/konyamaarifyazilim/about">
              <img className=" linkedin" src={linkedin} alt="linkedin" />
            </a>
          </div>

          <div className="col">
            <a href="https://www.youtube.com/@KonyaMaarifYazilim">
              <img className="youtube" src={youtube} alt="youtubr" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
