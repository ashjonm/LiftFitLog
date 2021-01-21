import React from "react";

import "./set.css";
import "./weightTrainingSet.css";

export default function WeightTrainingSet(props) {
    const {set} = props;

    return (
        <div className="set">
            <div className="set-count">{set.count}x</div>
            <div className="set-name"><div className="set-weight-training">W</div> - {set.name}</div>
            <div className="set-reps">{set.reps} reps</div>
            <div className="set-weight">@ {set.weight} lbs</div>
            <button className="set-count-increase"> + </button>
            <button className="set-edit">Edit</button>
        </div>
    );
};