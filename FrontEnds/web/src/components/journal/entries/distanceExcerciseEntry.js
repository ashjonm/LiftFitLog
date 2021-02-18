import React from "react";

import "./entry.css";
import "./distanceExcerciseEntry.css";

export default DistanceExcerciseEntry = props => {
    const {entry} = props;

    return (
        <div className="entry">
            <div className="entry-count-hidden">{entry.count}x</div>
            <div className="entry-name"><div className="entry-distance-excercise">D</div> - {entry.name}</div>
            <div className="entry-distance">{entry.distance} mi</div>
            <div className="entry-duration">in {entry.duration / 60} min</div>
            <button className="entry-edit-distance">Edit</button>
        </div>
    );
};