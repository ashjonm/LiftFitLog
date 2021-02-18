import React from "react";

import "./entry.css";
import "./activityEntry.css";

export default ActivityEntry = props => {
    const intensityTypes = {
        max: { name: "Max", floor: 95 },
        high: { name: "High", floor: 80 },
        fair: { name: "Fair", floor: 60 },
        mild: { name: "Mild", floor: 40 },
        low: { name: "Low", floor: 20 },
        min: { name: "Min", floor: 0 }
    };

    const {entry} = props;

    let entryIntensityText = "";

    if (entry.intensity >= intensityTypes.max.floor) {
        entryIntensityText = intensityTypes.max.name;
    } else if (entry.intensity >= intensityTypes.high.floor) {
        entryIntensityText = intensityTypes.high.name;
    } else if (entry.intensity >= intensityTypes.fair.floor) {
        entryIntensityText = intensityTypes.fair.name;
    } else if (entry.intensity >= intensityTypes.mild.floor) {
        entryIntensityText = intensityTypes.mild.name;
    } else if (entry.intensity >= intensityTypes.low.floor) {
        entryIntensityText = intensityTypes.low.name;
    } else if (entry.intensity >= intensityTypes.min.floor) {
        entryIntensityText = intensityTypes.min.name;
    };

    return (
        <div className="entry">
            <div className="entry-count-hidden">{entry.count}x</div>
            <div className="entry-name"><div className="entry-activity">A</div> - {entry.name}</div>
            <div className="entry-duration">for {entry.duration / 60} min</div>
            <div className="entry-intensity">@ {entryIntensityText} intensity</div>
            <button className="entry-edit-activity">Edit</button>
        </div>
    );
};