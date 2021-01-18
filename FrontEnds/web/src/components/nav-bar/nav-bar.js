import React from "react";

import "./nav-bar.css";

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="app-logo" />
                <div className="nav-button" >Log</div>
                <button className="login">Login / Logout</button>
            </div>
        );
    };
};

export default NavBar;