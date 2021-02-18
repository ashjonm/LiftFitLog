import React from "react";

import "./entry.css";
import "./calisthenicsEntry.css";

export default function CalisthenicsEntry(props) {
    const {entry} = props;

    let extraText = "";

    if (entry.extra && entry.extra > 0) {
        extraText += `w/ ${entry.extra} lbs of resist`
    };

    if (entry.extra && entry.extra < 0) {
        extraText += `w/ ${entry.extra * (-1)} lbs of assist`
    };

    return (
        <div className="entry">
            <div className="entry-count">{entry.count}x</div>
            <div className="entry-name"><div className="entry-calisthenics">C</div> - {entry.name}</div>
            <div className="entry-reps">{entry.reps} reps</div>
            <div className="entry-extra">{extraText}</div>
            <button className="entry-count-increase" onClick={() => props.incEntryCount(entry.id)}> + </button>
            <button className="entry-edit">Edit</button>
        </div>
    );
};