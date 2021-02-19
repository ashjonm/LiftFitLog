import React from "react";

import "./entry.css";
import "./weightTrainingEntry.css";

export default function WeightTrainingEntry(props) {
    const {entry} = props;

    return (
        <div className="entry">
            <div className="entry-count">{entry.count}x</div>
            <div className="entry-name"><div className="entry-weight-training">W</div> - {entry.name}</div>
            <div className="entry-reps">{entry.reps} reps</div>
            <div className="entry-weight">@ {entry.weight} lbs</div>
            <button className="entry-count-increase" onClick={() => props.incEntryCount(entry.id)}> + </button>
            <button className="entry-edit">Edit</button>
        </div>
    );
};