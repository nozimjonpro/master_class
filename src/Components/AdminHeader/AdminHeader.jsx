import React from "react";
import Search from '../../Img/searchblue.svg'
import Bell from '../../Img/bell.svg'
import Timati from '../../Img/Timati.svg'
import './adminheader.scss'

function AdminHeader() {
  return (
    <header className="admin__header">
        <div className="container">
            <div className="admin-header__search">
                <input  className="admin-header__input"  type="text" placeholder="search..."/>
                <img className="admin-header__icon" src={Search} alt="icon" width='24' height = '24'/>
            </div>
            <div className="admin-header__right">
                <img className="header-search__bell-icon" src={Bell} alt="bell icon" width='24' height = '24'/>
                <div className="admin__user">
                    <img className="admin__user-img" src={Timati} alt="Timati icon" width='44' height = '44'/>
                    <div className="admin__user-info">
                        <h4 className="admin__username">Abbos Janizkov</h4>
                        <p className="admin__userid">id:12432</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default AdminHeader;
