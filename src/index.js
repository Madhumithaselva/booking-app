import React from 'react';
import Booking from './Booking';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Booking/>
    </React.StrictMode>
)