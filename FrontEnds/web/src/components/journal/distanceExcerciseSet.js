import React from "react";

import "./set.css";
import "./distanceExcerciseSet.css";

class DistanceExcerciseSet extends React.Component {
    render() {
        const set = this.props.set;

        return (
            <div className="set">
                <div className="set-count-hidden">{set.count}x</div>
                <div className="set-name"><div className="set-distance-excercise">D</div> - {set.name}</div>
                <div className="set-distance">{set.distance} mi</div>
                <div className="set-duration">in {set.duration/60} min</div>
                <button className="set-edit-distance">Edit</button>
            </div>   
        );
    };
};

export default DistanceExcerciseSet;