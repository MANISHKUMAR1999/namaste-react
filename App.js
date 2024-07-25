// React Element is normal javascript object


/* <div id="parent">
    <div id="child">
<h1>I m h1 tag</h1>
    </div>

</div> */

import React from 'react';
import ReactDOM from 'react-dom';





// Jsx is a hmtl like syntax
// JSX(transpiled before it reaches the js) -> PARCEL - Babel

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)
    const Jsxheading = (<h1  
        className='head'>Namaste React Using Jsx
         </h1>)

     const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(Jsxheading);/// render method of convert the object to html.

