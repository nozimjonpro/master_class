import React from "react";
import { Link } from "react-router-dom";
import Home from '../../Img/home.svg'
import Presenatation from '../../Img/presentation.svg'
import Trash from '../../Img/trash.svg'
import Cog from '../../Img/cog.svg'
import Arrow from '../../Img/arrow.svg'
import './adminnav.scss'


function AdminNav (){
     
    return (
        <nav className="admin__nav">
            <h2 className="admin__heading">Pressa</h2>
            <ul className="admin__nav-list">
                <li className="admin__nav-item">
                    <Link className="admin__nav-link" to='/admin'><img className="admin__nav-link-image" src={Home} alt="icon" />Bosh sahifa</Link>
                </li>
                <li className="admin__nav-item">
                    <Link className="admin__nav-link" to='/statistics'><img className="admin__nav-link-image" src={Presenatation} alt="icon" />Statistika</Link>
                </li>
                <li className="admin__nav-item">
                    <Link className="admin__nav-link" to='/deleted'><img className="admin__nav-link-image" src={Trash} alt="icon" />O'chirilganlar</Link>
                </li>
                <li className="admin__nav-item">
                    <Link className="admin__nav-link" to='/settings'><img className="admin__nav-link-image" src={Cog} alt="icon" />Sozlamalar</Link>
                </li>
                <li className="admin__nav-item">
                    <Link className="admin__nav-link" to='/logout'><img className="admin__nav-link-image" src={Arrow} alt="icon" />Chiqish</Link>
                </li>
                <li className="admin__nav-item">
                    2022 All Rights
                </li>
            </ul>
        </nav>
    )
}

export default AdminNav;
