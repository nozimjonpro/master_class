import React from "react";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import useToken from "./Hooks/useToken";

function UnAuthenticatedApp(){
    const [token, setToken] = useToken()
    
    if(token){
        return <Admin></Admin>
    }
    return <Login></Login>
}

export default UnAuthenticatedApp;