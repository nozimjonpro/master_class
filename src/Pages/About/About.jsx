import React from "react";
import { Link } from "react-router-dom";
import House from "../../Img/House.svg";
import './about.scss'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
  <>
  <Header></Header>
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <Link className="about__link" to="/about">
            <img className="about__link-icon" src={House} alt="house icon" />{" "}
           <span> Biz haqimizda</span>
          </Link>
          <h2 className="about__heading">Biz haqimizda</h2>
          <p className="about__paragraph">
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.{" "}
            <br />
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik. <br />
            Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta
            guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent
            shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli
            ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi
            topshirildi. <br /> Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning
            qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib,
            dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan
            taqdirlanadi. Biz barchaga omad tilab qolamiz.
          </p>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
}

export default About;
