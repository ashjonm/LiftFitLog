import React from "react";

import "./set.css";
import "./distanceExcerciseSet.css";

class DistanceExcerciseSet extends React.Component {
    render() {
        const setTypes ={
            weightTraining: "WeightTraining",
            calisthenics: "Calisthenics",
            DistanceExcercise: "DistanceExcercise",
            Activity: "Activity"
        }

        const distanceExcerciseSet = {
            type: setTypes.DistanceExcercise,
            name: "Jog",
            extra: 15,
            duration: 60*20,
            distance: 1.5,
            intensity: 75,
            notes: "",
            count: 1
        }

        const set = distanceExcerciseSet;

        return (
            <div className="set">
                <div className="set-count-hidden">{set.count}x</div>
                <div className="set-name"><div className="set-distance-excercise">D</div> - {set.name}</div>
                <div className="set-distance">{set.distance} mi</div>
                <div className="set-duration">in {set.duration/60} min</div>
                <button className="set-edit-distance">Edit</button>
            </div>   
        );
    };
};

export default DistanceExcerciseSet;