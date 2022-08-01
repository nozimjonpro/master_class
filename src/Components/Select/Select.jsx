import React from "react";
import "./select.scss";
import StatusIcon from "../../Img/status-online.svg";

function Select() {
    const [optionValue, setOptionValue] = React.useState(null)
  return (
    <div className="searchbar__select-wrapper" onChange={(evt)=>{setOptionValue(evt.target.value)}}>
      <select className="searchbar__select">
        <option value="offline">Offline</option>
        <option value="online">Online</option>
      </select>
      <img className="searchber__select-icon" src={StatusIcon} alt="icon" />
    </div>
  );
}

export default Select;
