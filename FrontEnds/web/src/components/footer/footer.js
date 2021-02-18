import React from "react";

import "./footer.css";

export default Footer = props => {
    return (
        <div className="footer">
            <div className="footer-logo" />
            <p>© {props.today.getFullYear()} LiftFitLog - Jonathan Ash</p>
        </div>
    );
};