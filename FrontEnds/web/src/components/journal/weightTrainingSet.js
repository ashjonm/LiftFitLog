import React from "react";

import "./weightTrainingSet.css";

class WeightTrainingSet extends React.Component {
    render() {
        const setTypes ={
            weightTraining: "WeightTraining",
            calisthenics: "Calisthenics",
            DistanceExcercise: "DistanceExcercise",
            Activity: "Activity"
        }

        const weightTrainingSet = {
            type: setTypes.DistanceExcercise,
            name: "Chest Press",
            weight: 190,
            reps: 7,
            isHypertrophy: false,
            durration: 60*2,
            notes: "90s of rest between sets",
            count: 2
        }

        const set = weightTrainingSet;

        return (
            <div className="set">
                <div className="set-count">{set.count}x</div>
                <div className="set-name"><div className="set-weight-training">W</div> - {set.name}</div>
                <div className="set-repweight">{set.reps} Reps @ {set.weight} lbs</div>
                <button className="set-count-increase"> + </button>
                <button className="set-edit">Edit</button>
            </div>   
        );
    };
};

export default WeightTrainingSet;