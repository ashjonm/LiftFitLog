import React, { useState, useEffect } from "react";

import Day from "./day";
import { getDays } from "../../services/dayService";
import "./journal.css";

export default function Journal() {
    const [days, setDays] = useState([]);

    useEffect(() => {
        setDays(getDays());
    }, []);

    return (
        <div className="page">
            <div className="page-header">
                <div>Fitness Log</div>
                <button className="page-action"> Add Day </button>
            </div>
            <div className="page-body">
                <div className="journal">
                    {days.map(d => <Day key={d.id} day={d} />)}
                </div>
            </div>
        </div>
    );
};