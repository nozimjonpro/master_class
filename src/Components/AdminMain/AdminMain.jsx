import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import './adminmain.scss'

function AdminMain(){

    return(
        <main className="admin__main">
            <AdminHeader></AdminHeader>
          <div className="admin__main-filter-group">
          <div className="admin__main-filter">
                <label className="admin__main-label">
                    <input  className="admin__main-input visually-hidden" type="radio" name="status_check"/>
                    <span className="admin__main-span">Kutilmoqda</span>
                </label>
                <label className="admin__main-label">
                    <input  className="admin__main-input visually-hidden" type="radio" name="status_check"/>
                    <span className="admin__main-span">Qabul qilingan</span>
                </label>
                <label className="admin__main-label">
                    <input  className="admin__main-input visually-hidden" type="radio" name="status_check"/>
                    <span className="admin__main-span">Rad etilgan</span>
                </label>
            </div>
            <div className="admin__main-radio-group">
                <label className="admin__main-radio-label">
                    Oxirgilari
                    <input  className="admin__main-radio"  type="radio" name="radio_group"/>
                </label>
                <label className="admin__main-radio-label">
                    Eng so'ngillari
                    <input  className="admin__main-radio"  type="radio" name="radio_group"/>
                </label>
            </div>
          </div>
        </main>
    )
}


export default AdminMain;