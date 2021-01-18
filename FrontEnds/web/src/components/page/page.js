import React from "react";

import Journal from "../journal/journal"
import "./page.css";

class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page-header"> 
                    <div>{this.props.title}</div>
                    <button className="page-action">{this.props.actText}</button>
                </div>
                <div className="page-body"> 
                    <Journal />
                </div>
            </div>
        );
    };
};

export default Page;