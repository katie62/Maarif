import React from "react";
import Cover from "../../assets/sitebanner.png";
import Logo1 from "../../assets/Maarif.png"
import Logo2 from "../../assets/LogoYuvarlakMavi.png"
import And from "../../assets/and.png"
import Line from "../../assets/line.png"
import Line2 from "../../assets/line2.png"
import Btn from "../../assets/btn.png"
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div>
        <img className="cover" src={Cover} alt="cover" />
      </div>
      <hr className="hr"/>
       <div className="wrapper"><h2 className="slogan">"Öğrenciler tarafından, öğrenciler için"</h2></div>

       <div className="row gx-0">
        <div className="col-md-3"><img className="line" src={Line} alt="line" /></div>
        
        <div className="logos col-md-6">
        <img className="logo1" src={Logo1} alt="logo1" />
        <img className="and" src={And} alt="and" />
        <img className="logo2" src={Logo2} alt="logo2" />
        </div>

        <div className="col-md-3 cizgi"><img className="line2" src={Line2} alt="line" /></div>
       
      </div>
      
      
      <div className="info">
      <h2 className="head">Biz Kimiz?</h2>
            <p className="para">
            Konya Maarif Yazılım Kulübü, ücretsiz yazılım eğitimleri ve etkinlikleri düzenleyen, öğrenciler için yine öğrenciler tarafından kurulmuş bir kulüptür. Kulübümüzün amacı teknolojiye ilgisi olan, öğrenmek isteyen veya zaten bilen öğrenciler için bir buluşma merkezi olmaktır. Siz de eğitimlerimize katılmak isterseniz hemen şimdi Aşağıdan başvuru yapabilirisniz!
            </p>
      </div>

      <div className="btn1"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfUS2QhnALsNPHeZR1Zztj3Mq2jni9m4o-JD5NCMv4dmXuIOw/viewform"><img className="btnimg" src={Btn} alt="btn" /></a></div>


  </div>
  );
};

export default Homepage;
