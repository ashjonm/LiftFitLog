import React,{useState, useEffect} from "react";

import {getDayEntries} from "../../services/dayEntryService";
import WeightTrainingEntry from "./entries/weightTrainingEntry";
import CalisthenicsEntry from "./entries/calisthenicsEntry";
import DistanceExcerciseEntry from "./entries/distanceExcerciseEntry";
import ActivityEntry from "./entries/activityEntry";
import {entryTypes} from "../../constants/enums";
import "./day.css";

export default function Day(props) {
    const {day} = props;

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        setEntries(getDayEntries(day.id));
    },[]);
    
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