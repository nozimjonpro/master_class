import React from "react";
import "./questions.scss";
import House from "../../Img/House.svg";
import { Link } from "react-router-dom";
import BasicDatePicker from "../../Components/DataPicker/Data";
import MaterialUIPickers from "../../Components/TimePicker/Timepicker";
import {
  OrganizatorLegal,
  OrganizatorPhysical,
} from "../../Components/Organizator/Organizator";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function Questions() {
  const [organizator, setOrganizator] = React.useState("legal");
  const [file, setFile] = React.useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    socket.emit("message", { meassag: "bnnma" });
  };
  return (
    <>
      <Header></Header>
      <div className="question">
        <div className="container">
          <Link className="question__link" to="/questions">
            <img className="question__link-icon" src={House} alt="icon" />
            E'lon berish
          </Link>
          <h2 className="questions__heading">E'lon berish</h2>
          <form className="questions__form" onSubmit={handleSubmit}>
            <div className="question-from__date-block">
              <h3 className="question__block-heading">
                Vaqt va yo'nalishni tanlang
              </h3>
              <label className="question__form-label">
                <span className="question__form-span">
                  O'tkaziladigan sanani kiriting
                </span>
                <BasicDatePicker className="question__datepicker"></BasicDatePicker>
              </label>
              <label className="question__form-label">
                <MaterialUIPickers className="question__timepicker"></MaterialUIPickers>
              </label>
              <div className="question__date-category">
                <label className="question__form-label">
                  <span className="question__form-span">
                    Yo'nalishni belgilang
                  </span>
                  <select className="question__form-select" name="" id="">
                    <option hidden>Information technologies</option>
                    <option value="">Information technologies</option>
                    <option value="">Business training</option>
                    <option value="">Language Learning</option>
                  </select>
                </label>
                <label className="question__form-label">
                  <span className="question__form-span">Ichki yo'nalish</span>
                  <select className="question__form-select" name="" id="">
                    <option hidden>Information technologies</option>
                    <option value="">Frontend Developer</option>
                    <option value="">Business trainer</option>
                    <option value="">English Teacher</option>
                  </select>
                </label>
              </div>
              <div className="question__status-link">
                <span className="question__form-span">Tadbir turi</span>
                <span className="question__form-span">Link kiriting</span>
              </div>
              <div className="question__status-link">
                <div className="question__status">
                  <label className="question__form-label">
                    <input
                      className="question__input-online visually-hidden"
                      type="radio"
                      name="status"
                    />
                    <span className="question__form-online">Online</span>
                  </label>
                  <label className="question__form-label">
                    <input
                      className="question__input-online visually-hidden"
                      type="radio"
                      name="status"
                    />
                    <span className="question__form-offline">Offline</span>
                  </label>
                </div>
                <label className="question__form-label">
                  <input
                    className="question__input-link"
                    type="text"
                    name="status"
                    placeholder="www.something.com"
                  />
                </label>
              </div>
              <h3 className="question__organization">Tashkilotchi</h3>
              <div className="question__organization-choice">
                <label className="question__organization-label">
                  <span className="question__organization-span">
                    Jismoniy shaxs
                  </span>
                  <input
                    className="question__organization-input"
                    value="physical"
                    type="radio"
                    name="organiztion_check"
                    onClick={(evt) =>
                      console.log(setOrganizator(evt.target.value))
                    }
                  />
                </label>
                <label className="question__organization-label">
                  <span className="question__organization-span">
                    Yuridik shaxs
                  </span>
                  <input
                    className="question__organization-input"
                    type="radio"
                    value="legal"
                    name="organiztion_check"
                    onClick={(evt) =>
                      console.log(setOrganizator(evt.target.value))
                    }
                  />
                </label>
              </div>
            </div>

            {organizator === "legal" ? (
              <OrganizatorLegal></OrganizatorLegal>
            ) : (
              <OrganizatorPhysical></OrganizatorPhysical>
            )}

            <div className="question__post">
              <h3 className="question__post-heading">Post</h3>
              <label className="question-post__label">
                <span className="question-post__span">Post sarlavhasi</span>
                <input
                  className="question-post__input"
                  type="text"
                  placeholder="Title"
                />
              </label>
              <label className="question-post__label">
                <span className="question-post__span">Rasm yuklash</span>
                <input
                  className="question-post__input"
                  type="file"
                  multiple="multiple"
                  onChange={(e) => setFile(e.target.files)}
                />
              </label>
              <label className="question-post__label">
                <span className="question-post__span">Description</span>
                <textarea
                  className="question-post__input-area"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </label>
              <button className="question__cancel-btn">Bekor qilish</button>
              <button className="question__send-btn">E'lon yuborish</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Questions;
