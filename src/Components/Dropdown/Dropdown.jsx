import React from "react";
import "./dropdown.scss";
import Grid from "../../Img/view-grid.svg";

function Dropdown() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={()=>{setIsOpen(!isOpen)}}>
        <img className="view-grid" src={Grid} alt="icon" /> Bo’lim tanlang
      </button>
      <div className = {`dropdown__content ${isOpen ? 'dropdown__content--active' : ''}`}>
        <div className="dropdown__form--left">
          <h4 className="dropdown__left-heading">Offline</h4>
          <ul className="drowdown__list">
            <li className="dropdown__item">
              <h5 className="dropdown__item-heading">IT</h5>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox"/>
                Web dasturlash
              </label>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Mobile dasturlash
              </label>
            </li>
            <li className="dropdown__item">
              <h5 className="dropdown__item-heading">Dizayn</h5>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                UI/UX dizayn
              </label>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Grafik dizayn
              </label>
            </li>
            <li className="dropdown__item">
              <h5 className="dropdown__item-heading">Biznes</h5>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Menejment
              </label>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Kredit va audit
              </label>
            </li>
            <li className="dropdown__item">
              <h5 className="dropdown__item-heading">Ta'lim</h5>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Matematika
              </label>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Fizika
              </label>
            </li>
          </ul>
        </div>
        <div className="dropdown__form--right">
          <h4 className="dropdown__left-heading">Online</h4>
          <ul className="drowdown__list">
          <li className="dropdown__item">
              <h5 className="dropdown__item-heading">IT</h5>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Web dasturlash
              </label>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Mobile dasturlash
              </label>
            </li>
            <li className="dropdown__item">
              <h5 className="dropdown__item-heading">Dizayn</h5>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                UI/UX dizayn
              </label>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Grafik dizayn
              </label>
            </li>
            <li className="dropdown__item">
              <h5 className="dropdown__item-heading">Biznes</h5>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Menejment
              </label>
              <label className="dropdown__label">
                <input className="dropdown__input" type="checkbox" />
                Kredit va audit
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}



export default Dropdown;
