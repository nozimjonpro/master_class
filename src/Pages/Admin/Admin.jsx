import React from "react";
import './admin.scss';
import AdminNav from "../../Components/AdminNav/AdminNav";
import AdminMain from "../../Components/AdminMain/AdminMain";



function Admin(){

    return (
       <div className="admin">
        <div className="container">
        <AdminNav></AdminNav>
       <AdminMain></AdminMain>
        </div>
       </div>
    )
}

export default Admin;