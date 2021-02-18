import React from "react";

import "./nav-bar.css";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="app-logo" />
            <div className="nav-button" >Log</div>
            <button className="login">Login / Logout</button>
        </div>
    );
};