import React from "react";

import Day from "./day"
import "./journal.css";

class Journal extends React.Component {
    render() {
        return (
            <div className="journal">
                <Day />
                <Day />
                <Day />
                <Day />
            </div>   
        );
    };
};

export default Journal;