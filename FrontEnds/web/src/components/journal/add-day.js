import React,{useState} from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import {addDay} from "../../services/dayService";

import "react-datepicker/dist/react-datepicker.css";
import "./add-day.css";

Modal.setAppElement('#root')

export default function AddDay(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [weight, setWeight] = useState();
    const [notes, setNotes] = useState();
    
    
    var handleSubmit = (e) => {
        e.preventDefault();

        let newDay = {
            date: startDate,
            weight: weight,
            notes: notes,
        }

        addDay(newDay).then(
            props.closeModal(true)
        );
    }

    let setNewWeight = (e) => setWeight(e.target.value);
    let setNewNotes = (e) => setNotes(e.target.value);

    return (
        <Modal isOpen={props.isShown} className={'add-day-body'}>
            <button className="close-button" onClick={props.closeModal}> X </button>
            <h1>New Day</h1>
            <h2>{startDate.toLocaleDateString("en-us", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h2>
            <form id="addDay" onSubmit={handleSubmit}> 
                <DatePicker selected={startDate} onChange={setStartDate} />
                <label> 
                    <strong>Weight: </strong>
                    <input type="text" name="weight" onBlur={setNewWeight}/>
                </label>
                <label> 
                    <strong>Notes: </strong>
                    <input id="dayNotes" type="text" name="notes" onBlur={setNewNotes}/>
                </label>
                <button value="Create">Create</button>
            </form>
        </Modal>
    );
}