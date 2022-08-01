import React from "react";
import './organizator.scss';

function OrganizatorLegal({setLegal,
    setPhone,
    setName,
    setJob,
    setAddphone}){

    return (
        <div className="organizator__block">
            <label className="organizator__label">
                <span className="organizator__span">Yuridik nomi</span>
                <input className="organizator__input" required type="text" placeholder="Teshavoy corporation" value='pdp academy' onChange={(evt) => setLegal(evt.target.value)}/>
            </label>
            <label className="organizator__label">
                <span className="organizator__span">Ism sharifi</span>
                <input className="organizator__input" required type="text" placeholder="Abdulla Haydarov" value='Farhod Dadajonov' onChange={(evt) => setName(evt.target.value)}/>
            </label>
            <label className="organizator__label">
                <span className="organizator__span">Progessiya</span>
                <input className="organizator__input" required type="text" placeholder="Molboqar" value='frontend developer' onChange={(evt) => setJob(evt.target.value)}/>
            </label>
            <label className="organizator__label">
                <span className="organizator__span">Tel raqami</span>
                <input className="organizator__input" required type="text" placeholder="998999944949" value='998991234567' onChange={(evt) => setPhone(evt.target.value)}/>
            </label>
            <label className="organizator__label">
                <span className="organizator__span">Qo'shimcha tel raqami</span>
                <input className="organizator__input" required type="text" placeholder="998944454454" value='998902345678' onChange={(evt) => setAddphone(evt.target.value)}/>
            </label>
        </div>
    )
}

function OrganizatorPhysical({setPhone,
    setName,
    setJob,
    setAddphone}){

    return (
        <div className="organizator__block">
        <label className="organizator__label">
            <span className="organizator__span">Ism sharifi</span>
            <input className="organizator__input" type="text" placeholder="Abdulla Haydarov" value='Farhod Dadajonov' onChange={(evt) => setName(evt.target.value)}/>
        </label>
        <label className="organizator__label">
            <span className="organizator__span">Progessiya</span>
            <input className="organizator__input" type="text" placeholder="Molboqar" value='frontend developer' onChange={(evt) => setJob(evt.target.value)}/>
        </label>
        <label className="organizator__label">
            <span className="organizator__span">Tel raqami</span>
            <input className="organizator__input" type="text" placeholder="998999944949" value='998991234567' onChange={(evt) => setPhone(evt.target.value)}/>
        </label>
        <label className="organizator__label">
            <span className="organizator__span">Qo'shimcha tel raqami</span>
            <input className="organizator__input" type="text" placeholder="998944454454" value='998902345678' onChange={(evt) => setAddphone(evt.target.value)}/>
        </label>
    </div>
    )
}

export {
    OrganizatorLegal, OrganizatorPhysical
}
