import React,{useState} from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import {addDay} from "../../services/dayService";

import "react-datepicker/dist/react-datepicker.css";
import "./add-day.css";

Modal.setAppElement('#root')

export default function AddDay(props) {
    const [day, setDay] = useState({date:new Date()});

    var handleSubmit = (e) => {
        e.preventDefault();

        addDay(day).then(
            props.closeModal(true)
        );
    }

    let setDate = date => setDay({...day, date}) 
    let setWeight = e => setDay({...day, weight:e.target.value});
    let setNotes = e => setDay({...day, notes:e.target.value});

    return (
        <Modal isOpen={props.isShown} className={'add-day-body'}>
            <button className="close-button" onClick={props.closeModal}> X </button>
            <h1>New Day</h1>
            <h2>{day.date.toLocaleDateString("en-us", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h2>
            <form id="addDay" onSubmit={handleSubmit}> 
                <DatePicker selected={day.date} onChange={setDate} />
                <label> 
                    <strong>Weight: </strong>
                    <input type="number" name="weight" onBlur={setWeight} min="0" max="500"/>
                </label>
                <label> 
                    <strong>Notes: </strong>
                    <input id="dayNotes" type="text" name="notes" onBlur={setNotes}/>
                </label>
                <button value="Create">Create</button>
            </form>
        </Modal>
    );
}