import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from './content.js';
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';

const App = () => {
    return(
        <>
         <Index />
        </>
    )
}
 ReactDOM.render(<App />,document.getElementById("root"));
