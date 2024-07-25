// React Element is normal javascript object

/* <div id="parent">
    <div id="child">
<h1>I m h1 tag</h1>
    </div>

</div> */

import React from "react";
import ReactDOM from "react-dom";

// React Functional with kfuntion keyboard Component

const elem = (
    <h1>Hello eleme </h1>
   
)
const TitleComponent = function() {
   return ( 
    <div>
        {elem}
        hello title
    </div>
)
}

//React Functional with kfuntion keyboard

const number = 10000

const HeadingComponent = () => 
    (

   
  <div id="container">
    {TitleComponent()}
    <h2>{number}</h2>
    <TitleComponent/>
    


    <h1>Hello world</h1>
  </div>
   )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>)
