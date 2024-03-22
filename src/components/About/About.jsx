import React from 'react'
import Cover from "../../assets/sitebanner.png";
import './About.css'

const About = () => {
  return (
    <div>
      <div>
        <img className="cover" src={Cover} alt="cover" />
      </div>
      <div className="info">
        
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jvyqHntfgsU?si=kW502gZ7hk_Zqw2e"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="video col-sm-4"
        ></iframe>

        
          <h2 className="head">Biz Kimiz?</h2>
          <p className="para">
          Konya Maarif Yazılım Kulübü, ücretsiz yazılım eğitimleri ve etkinlikleri düzenleyen, öğrenciler için yine öğrenciler tarafından kurulmuş bir kulüptür.Kulübümüzün amacı teknolojiye ilgisi olan, öğrenmek isteyen veya zaten bilen öğrenciler için bir buluşma merkezi olmaktır. Bu arkadaşlarımızın ilgi alanlarını belirler, onların yazılım kariyerlerini nasıl devam ettirmek istediklerini belirlemelerine yardım ederiz. Kulübümüz yazılım bilmeyip öğrenmek isteyenler için YouTube üzerinden videolar üretmektedir. Yazılım bilenlerimiz Discord sunucumuzda projelerini paylaşıp geri dönüş alma imkanına erişir. Düzenlediğimiz etkinliklerle öğrencilere ilham vermeyi ve kendilerini geliştirmeleri için gerekli motivasyonu bulmalarını amaçlıyoruz. Kulübümüz, 2021 yılında okulumuzun 63. dönem öğrencisi Mehmet Berk Gökmen tarafından kurulmuştur. Eğer Eğitimlerimize göz atmak isterseniz yandan ilk videomuzu izletebilirsiniz!
          </p>
        
      
    </div>
    </div>
  )
}

export default About