import React from "react";

import { Context } from "../Context/Authentication";

const useToken = (setterOnly = false) =>{
    const ctx = React.useContext(Context);

    return setterOnly ? [ctx.setToken] : [ctx.token, ctx.setToken]
}

export default useToken;

