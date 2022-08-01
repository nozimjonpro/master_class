import React from "react";
import './header.scss'
import Search from '../../Img/search.svg';
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className="header">
        <div className="container">
      <Link className="header__link" to="/">
        Pressa
      </Link>
      <label className="header__label" htmlFor="">
        <input className="header__search" type="text" placeholder="izlash" />
        <img className="header__search-icon" src={Search} alt="icon" />
      </label>
      <ul className="header__list">
        <li className="header__list-item">
            <Link className="header__item-link" to="/about">Biz haqimizda</Link>
        </li>
        <li className="header__list-item">
            <Link className="header__item-link" to="/questions">Savol va javoblar</Link>
        </li>
      </ul>
      <button className="header__btn">+ E'lon berish</button>
    </div>
    </header>
  );
}

export default Header;
