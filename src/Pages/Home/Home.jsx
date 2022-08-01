import React from "react";
import "./home.scss";
import Dropdown from "../../Components/Dropdown/Dropdown";
import BasicDatePicker from "../../Components/DataPicker/Data";
import Select from "../../Components/Select/Select";
import MultipleSelect from "../../Components/NameSelect/Name";
import ManImage1 from "../../Img/image1.svg";
import ManImage2 from "../../Img/image2.svg";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {Link} from 'react-router-dom'

function Home() {
  const [data, setData] = React.useState([]);
  const [date, setDate] = React.useState();
  const [course, setCourse] = React.useState();
  const [lesson, setLesson] = React.useState();
  const [name, setName] = React.useState();
  console.log(data);
  React.useEffect(() => {
    fetch("https://masterclassjon.herokuapp.com/organizators")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  function formatDate(anyDate){
    var date = new Date(anyDate);

    // Get year, month, and day part from the date
    var year = date.toLocaleString("default", {
      year: "numeric",
    });
    var month = date.toLocaleString("default", {
      month: "2-digit",
    });
    var day = date.toLocaleString("default", { day: "2-digit" });
    return  day + "-" + month + "-" + year;
  }

  return (
    <>
      <Header></Header>
      <div className="main">
        <section className="hero">
          <div className="container">
            <h1 className="hero__heading">
              Eng so’ngi master klasslar va tadbirlar bizning saytda
            </h1>
            <div className="searchbar">
              <form
                className="searchbar__form"
                onSubmit={(evt) => {
                  evt.preventDefault();
                }}
              >
                <ul className="searchbar__list">
                  <li className="searchbar__item">
                    <BasicDatePicker setDate={setDate}></BasicDatePicker>
                  </li>
                  <li className="searchbar__item">
                    <Dropdown setCourse={setCourse}></Dropdown>
                  </li>
                  <li className="searchbar__item">
                    <Select setLesson={setLesson}></Select>
                  </li>
                  <li className="searchbar__item">
                    <MultipleSelect setName={setName}></MultipleSelect>
                  </li>
                  <li className="searchbar__item">
                    {" "}
                    <button className="searchbar__btn">Izlash</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </section>

        <section className="announces">
          <div className="container">
            <ul className="announces__list">
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <li className="announce__item" key={item.organizator_id}>
                      <Link className="announce__item" to={'/organizator/' + item.organizator_id}>
                      <img
                        className="announce__img"
                        src={item.image}
                        alt="image"
                      />
                      <div className="announce__info">
                        <h3 className="announce__title">{item.title}</h3>
                        <div className="announce__times">
                          <span className="announce__speaker">
                            {item.speaker}
                          </span>
                          <span className="announce__speaker-job">
                            {item.profession}
                          </span>
                          <span className="announce__date">
                            {formatDate(item.start_date)}
                          </span>
                          <span className="announce__time">
                            {item.start_time}
                          </span>
                          <span className="announce__event">
                            {item.event_type}
                          </span>
                          <span className="announce__watched">
                            {data.length}
                          </span>
                        </div>
                      </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>

        <section className="business">
          <div className="container">
            <div className="hero__bottom">
              <div className="hero__bottom--left">
                <h3 className="hero__bottom__heading">
                  E’LONLARINGIZNI BIZNI SAYTDA BERING
                </h3>
                <img
                  className="hero__bottom-img"
                  width={297}
                  height="377"
                  src={ManImage1}
                  alt="images"
                />
              </div>
              <div className="hero__bottom--right">
                <h3 className="hero__bottom__heading">
                  ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA
                </h3>
                <img
                  className="hero__bottom-img"
                  width={263}
                  height="393"
                  src={ManImage2}
                  alt="images"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
