import React from "react";

import "./set.css";
import "./distanceExcerciseSet.css";

export default function DistanceExcerciseSet(props) {
    const {set} = props;

    return (
        <div className="set">
            <div className="set-count-hidden">{set.count}x</div>
            <div className="set-name"><div className="set-distance-excercise">D</div> - {set.name}</div>
            <div className="set-distance">{set.distance} mi</div>
            <div className="set-duration">in {set.duration / 60} min</div>
            <button className="set-edit-distance">Edit</button>
        </div>
    );
};