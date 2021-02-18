import React from "react";

import Day from "./day"
import "./journal.css";

export default function Journal() {
    let day = {
        date: new Date("01/13/2021"),
        weight: 287.3,
        notes: "Chest & Arm Day"
    };

    let days = [
            {...day, id:1, date:new Date("01/11/2021")},
            {...day, id:2, date:new Date("01/12/2021")}, 
            {...day, id:3, date:new Date("01/13/2021")}, 
            {...day, id:4, date:new Date("01/14/2021")}
    ];

    return (
        <div className="journal">
            {days.map(d => <Day key={d.id} day={d}/>)}
        </div>   
    );
};