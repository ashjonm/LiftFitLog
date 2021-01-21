import React from "react";

import WeightTrainingSet from "./weightTrainingSet";
import CalisthenicsSet from "./calisthenicsSet";
import DistanceExcerciseSet from "./distanceExcerciseSet";
import ActivitySet from "./activitySet";
import "./day.css";

class Day extends React.Component {
    render() {
        const setTypes ={
            weightTraining: "WeightTraining",
            calisthenics: "Calisthenics",
            distanceExcercise: "DistanceExcercise",
            activity: "Activity"
        }

        const day = {
            date: new Date("01/13/2021"),
            weight: 287.3,
            notes: "Chest & Arm Day",
            sets: [
                {
                    type: setTypes.weightTraining,
                    name: "Chest Press",
                    weight: 190,
                    reps: 7,
                    isHypertrophy: false,
                    durration: 60*2,
                    notes: "90s of rest between sets",
                    count: 2
                },
                {
                    type: setTypes.calisthenics,
                    name: "Situp",
                    reps: 20,
                    extra: 5,
                    intensity: 75,
                    duration: 60*2,
                    notes: "90s of rest between sets",
                    count: 5
                },
                {
                    type: setTypes.distanceExcercise,
                    name: "Jog",
                    extra: 15,
                    duration: 60*20,
                    distance: 1.5,
                    intensity: 75,
                    notes: "",
                    count: 1
                },
                {
                    type: setTypes.activity,
                    name: "Yoga",
                    duration: 60*15,
                    intensity: 45,
                    notes: "90s of rest between sets",
                    count: 1
                },
                {
                    type: setTypes.weightTraining,
                    name: "Bench Press",
                    weight: 140,
                    reps: 7,
                    isHypertrophy: false,
                    durration: 60*2,
                    notes: "90s of rest between sets",
                    count: 3
                }
            ]
        };

        let renderedSets = day.sets.map(s => {
            if (s.type === setTypes.distanceExcercise) {
                return <DistanceExcerciseSet set={s} />;
            };
            if (s.type === setTypes.weightTraining) {
                return <WeightTrainingSet set={s} />;
            };
            if (s.type === setTypes.activity) {
                return <ActivitySet set={s} />;
            };
            if (s.type === setTypes.calisthenics) {
                return <CalisthenicsSet set={s} />;
            };
        });

        return (
            <div className="day">
                <div className="day-info">
                    <div className="day-date">{day.date.toLocaleDateString("en-us", {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}</div>
                    <div className="day-weight">Weight: {day.weight} lbs</div>
                    <div className="day-notes">{day.notes || "Notes:"}</div>
                    <div className="day-button-container">
                        <button className="day-edit">Edit</button>
                        <button className="day-add-set">Add</button>
                    </div>
                </div>
                <div className="day-entries">
                    {renderedSets}
                </div>
            </div>   
        );
    };
};

export default Day;