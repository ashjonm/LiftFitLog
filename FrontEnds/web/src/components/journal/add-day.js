import React,{useState} from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./add-day.css";

Modal.setAppElement('#root')

export default function AddDay(props) {
    const [startDate, setStartDate] = useState(new Date());

    var handleSubmit = () => {
        console.log("create a new day!");
        alert("create a new day!")
    }

    return (
        <Modal isOpen={props.isShown} className={'add-day-body'}>
            <button className="close-button" onClick={props.closeModal}> X </button>
            <h1>New Day</h1>
            <h2>{startDate.toLocaleDateString("en-us", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h2>
            <form onSubmit={handleSubmit}> 
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <label> 
                    <strong>Weight: </strong>
                    <input type="text" name="weight"/>
                </label>
                <label> 
                    <strong>Notes: </strong>
                    <input type="text" name="notes"/>
                </label>
                <input type="submit" value="Create" />
            </form>
        </Modal>
    );
}