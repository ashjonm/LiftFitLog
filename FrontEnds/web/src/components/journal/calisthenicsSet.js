import React from "react";

import "./set.css";
import "./calisthenicsSet.css";

class CalisthenicsSet extends React.Component {
    render() {
        const set = this.props.set;

        let extraText = "";

        if (set.extra && set.extra > 0) {
            extraText += `w/ ${set.extra} lbs of resist`
        } ;

        if (set.extra && set.extra < 0) {
            extraText += `w/ ${set.extra * (-1)} lbs of assist`
        };

        return (
            <div className="set">
                <div className="set-count">{set.count}x</div>
                <div className="set-name"><div className="set-calisthenics">C</div> - {set.name}</div>
                <div className="set-reps">{set.reps} reps</div>
                <div className="set-extra">{extraText}</div>
                <button className="set-count-increase"> + </button>
                <button className="set-edit">Edit</button>
            </div>   
        );
    };
};

export default CalisthenicsSet;