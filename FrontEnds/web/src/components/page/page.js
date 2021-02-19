import React from "react";

import Journal from "../journal/journal"
import "./page.css";

export default function Page(props) {
        return (
            <div className="page">
                <div className="page-header"> 
                    <div>{props.title}</div>
                    <button className="page-action">{props.actText}</button>
                </div>
                <div className="page-body"> 
                    <Journal />
                </div>
            </div>
        );
};