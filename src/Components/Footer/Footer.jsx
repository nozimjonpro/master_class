import React from "react";
import facebook from '../../Img/facebook.svg'
import instagram from '../../Img/instagram.svg'
import telegram from '../../Img/telegram.svg';
import { Link } from "react-router-dom";
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link className="footer__link" to="/">
          Pressa
        </Link>
        <ul className="footer__list">
          <li className="footer__list-item">
            <Link className="footer__item-link" to="/about">
              Biz haqimizda
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__item-link" to="/questions">
              Savol va javoblar
            </Link>
          </li>
        </ul>
        <a className="footer__phone-link" href="tel:9989936290323">+71 200-11-02</a>
        <ul className="footer__social">
            <li className="footer__social-item">
                <img className="footer__social-icons" src={facebook} alt="icon"  />
            </li>
            <li className="footer__social-item">
                <img className="footer__social-icons" src={instagram} alt="icon"  />
            </li>
            <li className="footer__social-item">
                <img className="footer__social-icons" src={telegram} alt="icon"  />
            </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
