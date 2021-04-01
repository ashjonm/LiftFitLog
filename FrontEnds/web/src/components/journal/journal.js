import React, { useState, useEffect } from "react";

import AddDay from "./add-day";
import Day from "./day";
import { getDays } from "../../services/dayService";
import "./journal.css";

export default function Journal() {
    const [days, setDays] = useState([]);
    const [isShownAddDay, setIsShownAddDay] = useState(false);

    useEffect(() => {
        setDays(getDays());
    }, []);

    const showAddDay = () => setIsShownAddDay(true);
    const hideAddDay = (isSuccess) => {
        setIsShownAddDay(false);

        if (isSuccess) {
            setDays(getDays());
        }
    }

    return (
        <div className="page">
            <div className="page-header">
                <div>Fitness Log</div>
                <button className="page-action" onClick={showAddDay}> Add Day </button>
            </div>
            <div className="page-body">
                <AddDay isShown={isShownAddDay} closeModal={hideAddDay} />
                <div className="journal">
                    {days.map(d => <Day key={d.id} day={d} />)}
                </div>
            </div>
        </div>
    );
};