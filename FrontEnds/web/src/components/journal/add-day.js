import React from "react";
import Modal from "react-modal";

import "./add-day.css";

Modal.setAppElement('#root')

export default function AddDay(props) {
    return (
        <Modal isOpen={props.isShown} className={'add-day-body'}>
            <button className="close-button" onClick={props.closeModal}> X </button>
            <h1>New Day</h1>
            <h2>the date</h2>
            
        </Modal>
    );
}