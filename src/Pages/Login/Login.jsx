import React from "react";
import "./login.scss";
import useToken from "../../Hooks/useToken";

function Login() {

  const [token, setToken] = useToken()
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const {username, password} = evt.target.elements;

  
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value.trim(),
        password: password.value.trim()
      })
    }).then(res => res.json()).then(data=>setToken(data.token))

    

  }

  return (
    <>
      <div className="login">
        <div className="container-login">
          <a className="login__logo" href="#link">
            Pressa
          </a>
          <form className="login__form" onSubmit={handleSubmit}>
            <h4 className="login__heading">Tizimga kirish</h4>
            <label className="login__user-input-label">
              <input
                className="login__input login__input-username"
                type="text"
                placeholder="Login"
                name="username"
                defaultValue='salim'
              />
              {/* <img className="login__input-icon" src= "" alt="" width={20} height={20} /> */}
            </label>
            <input
              className="login__input login__input-password"
              type="Password"
              placeholder="password"
              name="password"
              defaultValue='111133'
            />
            <a className="login__forgot" href="#link">
              Parolni unutdingizmi ?
            </a>
            <button className="login__btn">Kirish</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
