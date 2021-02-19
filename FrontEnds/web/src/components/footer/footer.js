import React from "react";

import "./footer.css";

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-logo" />
            <p>© {props.today.getFullYear()} LiftFitLog - Jonathan Ash</p>
        </div>
    );
};