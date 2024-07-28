
import React from "react";
import { useRouteError } from "react-router-dom";
const Error = ()=>{

    const err= useRouteError();
    console.log(err)
    return (
        <div className="d-flex align-item-center justify-content-center gy-5">
 <div >

OOOPS !! this is Error page
<h1>{err.data}</h1>

</div>
        </div>
       
    )
}

export default Error;