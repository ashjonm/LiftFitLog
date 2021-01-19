import React from "react";

import "./day.css";

class Day extends React.Component {
    render() {
        const day = {
            date: new Date("01/13/2021"),
            weight: 287.3,
            notes: "Had a good day at the gym."
        };

        return (
            <div className="day">
                <div className="day-info">
                    <div className="day-date">{day.date.toLocaleDateString("en-us", {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}</div>
                    <div className="day-weight">Weight: {day.weight} lbs</div>
                    <div className="day-notes">{day.notes || "Notes:"}</div>
                </div>
                <div className="day-entries"></div>
        
            </div>   
        );
    };
};

export default Day;