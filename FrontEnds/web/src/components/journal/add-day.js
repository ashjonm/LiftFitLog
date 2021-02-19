import React from "react";
import Modal from "react-modal";

// import "./add-day.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

export default function AddDay(props) {
    return (
        <Modal isOpen={props.isShown} styles={customStyles}>
            <h2>Hello</h2>
            <button onClick={props.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
    );
}