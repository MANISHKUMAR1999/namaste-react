// React Element is normal javascript object


/* <div id="parent">
    <div id="child">
<h1>I m h1 tag</h1>
    </div>

</div> */

import React from 'react';
import ReactDOM from 'react-dom';


const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},

       [ React.createElement("h1",{},"H1 TAG"),React.createElement("h2",{},"H2 TAG")]
    ),
    React.createElement("div",{id:"child2"},

        [ React.createElement("h1",{},"H1 TAG"),React.createElement("h2",{},"H2 TAG")]
     )
)



    // const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from React!");
     const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);/// render method of convert the object to html.

