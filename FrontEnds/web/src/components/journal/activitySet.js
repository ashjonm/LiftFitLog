import React from "react";

import "./set.css";
import "./activitySet.css";

class ActivitySet extends React.Component {
    render() {
        const setTypes ={
            weightTraining: "WeightTraining",
            calisthenics: "Calisthenics",
            DistanceExcercise: "DistanceExcercise",
            Activity: "Activity"
        }

        const intensityTypes = {
            max:  { name: "Max", floor: 95 },
            high: { name: "High", floor: 80 },
            fair: { name: "Fair", floor: 60 },
            mild: { name: "Mild", floor: 40 },
            low: { name: "Low", floor: 20 },
            min: { name: "Min", floor: 0 }
        }

        const activitySet = {
            type: setTypes.activitySet,
            name: "Yoga",
            duration: 60*15,
            intensity: 45,
            notes: "90s of rest between sets",
            count: 1
        }

        const set = activitySet;

        let setIntensityText = "";
        
        if (set.intensity >= intensityTypes.max.floor) {
            setIntensityText = intensityTypes.max.name;
        } else if (set.intensity >= intensityTypes.high.floor) {
            setIntensityText = intensityTypes.high.name;
        } else if (set.intensity >= intensityTypes.fair.floor) {
            setIntensityText = intensityTypes.fair.name;
        } else if (set.intensity >= intensityTypes.mild.floor) {
            setIntensityText = intensityTypes.mild.name;
        } else if (set.intensity >= intensityTypes.low.floor) {
            setIntensityText = intensityTypes.low.name;
        } else if (set.intensity >= intensityTypes.min.floor) {
            setIntensityText = intensityTypes.min.name;
        };

        return (
            <div className="set">
                <div className="set-count-hidden">{set.count}x</div>
                <div className="set-name"><div className="set-activity">A</div> - {set.name}</div>
                <div className="set-duration">for {set.duration/60} min</div>
                <div className="set-intensity">@ {setIntensityText} intensity</div>
                <button className="set-edit-activity">Edit</button>
            </div>   
        );
    };
};

export default ActivitySet;