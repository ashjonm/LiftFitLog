import React from "react";

import WeightTrainingSet from "./weightTrainingSet";
import CalisthenicsSet from "./calisthenicsSet";
import DistanceExcerciseSet from "./distanceExcerciseSet";
import "./day.css";

class Day extends React.Component {
    render() {
        const day = {
            date: new Date("01/13/2021"),
            weight: 287.3,
            notes: "Chest & Arm Day"
        };

        return (
            <div className="day">
                <div className="day-info">
                    <div className="day-date">{day.date.toLocaleDateString("en-us", {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}</div>
                    <div className="day-weight">Weight: {day.weight} lbs</div>
                    <div className="day-notes">{day.notes || "Notes:"}</div>
                </div>
                <div className="day-entries">
                    <WeightTrainingSet />
                    <CalisthenicsSet />
                    <DistanceExcerciseSet />
                    <WeightTrainingSet />
                </div>
            </div>   
        );
    };
};

export default Day;