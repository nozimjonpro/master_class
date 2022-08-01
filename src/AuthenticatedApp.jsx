import React from "react";
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Questions from "./Pages/Questions/Questions";
import UnAuthenticatedApp from "./UnAuthenticatedApp";

function AuthenticatedApp(){
    return (
          <>
            <Routes>
              <Route path="/" element = {<Home></Home>}/>
              <Route path="/about" element = {<About></About>}/>
              <Route path="/questions" element = {<Questions></Questions>}></Route>
              <Route path="/*" element = {<h1>Nothing found</h1>}></Route>
              <Route path="/admin" element = {<UnAuthenticatedApp></UnAuthenticatedApp>}></Route>
            </Routes>
          </>
    )
}

export default AuthenticatedApp;