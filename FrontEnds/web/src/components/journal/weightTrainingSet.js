import React from "react";

import "./set.css";
import "./weightTrainingSet.css";

class WeightTrainingSet extends React.Component {
    render() {
        const set = this.props.set;

        return (
            <div className="set">
                <div className="set-count">{set.count}x</div>
                <div className="set-name"><div className="set-weight-training">W</div> - {set.name}</div>
                <div className="set-reps">{set.reps} reps</div>
                <div className="set-weight">@ {set.weight} lbs</div>
                <button className="set-count-increase"> + </button>
                <button className="set-edit">Edit</button>
            </div>   
        );
    };
};

export default WeightTrainingSet;