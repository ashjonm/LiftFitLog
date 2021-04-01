import React,{useState} from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import {addDay} from "../../services/dayService";

import "react-datepicker/dist/react-datepicker.css";
import "./add-day.css";

Modal.setAppElement('#root')

export default function AddDay(props) {
    const [startDate, setStartDate] = useState(new Date());
    
    var handleSubmit = (e) => {
        e.preventDefault();

        let newDay = {
            date: startDate,
            weight: document.getElementById("dayWeight").value,
            notes: document.getElementById("dayNotes").value,
        }

        addDay(newDay).then(
            props.closeModal(true)
        );
    }

    return (
        <Modal isOpen={props.isShown} className={'add-day-body'}>
            <button className="close-button" onClick={props.closeModal}> X </button>
            <h1>New Day</h1>
            <h2>{startDate.toLocaleDateString("en-us", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h2>
            <form id="addDay" onSubmit={handleSubmit}> 
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <label> 
                    <strong>Weight: </strong>
                    <input id="dayWeight" type="text" name="weight"/>
                </label>
                <label> 
                    <strong>Notes: </strong>
                    <input id="dayNotes" type="text" name="notes"/>
                </label>
                <button value="Create">Create</button>
            </form>
        </Modal>
    );
}