import React,{useState} from "react";

import WeightTrainingEntry from "./entries/weightTrainingEntry";
import CalisthenicsEntry from "./entries/calisthenicsEntry";
import DistanceExcerciseEntry from "./entries/distanceExcerciseEntry";
import ActivityEntry from "./entries/activityEntry";
import "./day.css";

export default function Day() {
    const entryTypes = {
        weightTraining: "WeightTraining",
        calisthenics: "Calisthenics",
        distanceExcercise: "DistanceExcercise",
        activity: "Activity"
    };

    let defaultEntries= [
        {
            id: 1,
            type: entryTypes.weightTraining,
            name: "Chest Press",
            weight: 190,
            reps: 7,
            isHypertrophy: false,
            durration: 60 * 2,
            notes: "90s of rest between sets",
            count: 2
        },
        {
            id: 2,
            type: entryTypes.calisthenics,
            name: "Situp",
            reps: 20,
            extra: 5,
            intensity: 75,
            duration: 60 * 2,
            notes: "90s of rest between sets",
            count: 5
        },
        {
            id: 3,
            type: entryTypes.calisthenics,
            name: "Pullup",
            reps: 20,
            extra: -15,
            intensity: 75,
            duration: 60 * 2,
            notes: "90s of rest between sets",
            count: 5
        },
        {
            id: 4,
            type: entryTypes.distanceExcercise,
            name: "Jog",
            extra: 15,
            duration: 60 * 20,
            distance: 1.5,
            intensity: 75,
            notes: "",
            count: 1
        },
        {
            id: 5,
            type: entryTypes.activity,
            name: "Yoga",
            duration: 60 * 15,
            intensity: 45,
            notes: "90s of rest between sets",
            count: 1
        },
        {
            id: 6,
            type: entryTypes.weightTraining,
            name: "Bench Press",
            weight: 140,
            reps: 7,
            isHypertrophy: false,
            durration: 60 * 2,
            notes: "90s of rest between sets",
            count: 3
        }
    ];

    let day = {
        date: new Date("01/13/2021"),
        weight: 287.3,
        notes: "Chest & Arm Day"
    };

    const [entries, setEntries] = useState(defaultEntries);

    let incEntryCount = (id) => {
        let incEntry = entries.filter(s => s.id === id)[0];
        incEntry.count ++;
        setEntries(entries);
    };

    return (
        <div className="day">
            <div className="day-info">
                <div className="day-date">{day.date.toLocaleDateString("en-us", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</div>
                <div className="day-weight">Weight: {day.weight} lbs</div>
                <div className="day-notes">{day.notes || "Notes:"}</div>
                <div className="day-button-container">
                    <button className="day-edit">Edit</button>
                    <button className="day-add-entry">Add</button>
                </div>
            </div>
            <div className="day-entries">
                {entries.map(s => {
                    if (s.type === entryTypes.distanceExcercise) {
                        return <DistanceExcerciseEntry key={s.id} entry={s} />;
                    };
                    if (s.type === entryTypes.weightTraining) {
                        return <WeightTrainingEntry key={s.id} entry={s} incEntryCount={incEntryCount} />;
                    };
                    if (s.type === entryTypes.activity) {
                        return <ActivityEntry key={s.id} entry={s} />;
                    };
                    if (s.type === entryTypes.calisthenics) {
                        return <CalisthenicsEntry key={s.id} entry={s} incEntryCount={incEntryCount} />;
                    };
                })}
            </div>
        </div>
    );
};