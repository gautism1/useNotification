import React from "react";
import ReactDOM from "react-dom";
import "./notify.css";
import setStyles from "./Style.js";
function Notify(props) {
    const style = setStyles(props.type);

    return ReactDOM.createPortal(
        <div className="toast" style={style}>
            <div>{props.type.message}</div>
            <button
                className="closeButton"
                onClick={() => props.closeNotification()}
            >
                {" "}
                Close
            </button>
        </div>,
        document.getElementById("notificationRoot")
    );
}

export default Notify;
