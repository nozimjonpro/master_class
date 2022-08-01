import React from "react";
import './organizator.scss';

function OrganizatorLegal(){

    return (
        <div className="organizator__block">
            <label className="organizator__label">
                <span className="organizator__span">Yuridik nomi</span>
                <input className="organizator__input" type="text" placeholder="Teshavoy corporation"/>
            </label>
            <label className="organizator__label">
                <span className="organizator__span">Ism sharifi</span>
                <input className="organizator__input" type="text" placeholder="Abdulla Haydarov"/>
            </label>
            <label className="organizator__label">
                <span className="organizator__span">Progessiya</span>
                <input className="organizator__input" type="text" placeholder="Molboqar"/>
            </label>
            <label className="organizator__label">
                <span className="organizator__span">Tel raqami</span>
                <input className="organizator__input" type="text" placeholder="998999944949"/>
            </label>
            <label className="organizator__label">
                <span className="organizator__span">Qo'shimcha tel raqami</span>
                <input className="organizator__input" type="text" placeholder="998944454454"/>
            </label>
        </div>
    )
}

function OrganizatorPhysical(){

    return (
        <div className="organizator__block">
        <label className="organizator__label">
            <span className="organizator__span">Ism sharifi</span>
            <input className="organizator__input" type="text" placeholder="Abdulla Haydarov"/>
        </label>
        <label className="organizator__label">
            <span className="organizator__span">Progessiya</span>
            <input className="organizator__input" type="text" placeholder="Molboqar"/>
        </label>
        <label className="organizator__label">
            <span className="organizator__span">Tel raqami</span>
            <input className="organizator__input" type="text" placeholder="998999944949"/>
        </label>
        <label className="organizator__label">
            <span className="organizator__span">Qo'shimcha tel raqami</span>
            <input className="organizator__input" type="text" placeholder="998944454454"/>
        </label>
    </div>
    )
}

export {
    OrganizatorLegal, OrganizatorPhysical
}
