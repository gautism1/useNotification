import React, { useState } from "react";
import "./App.css";
import { useNotification } from "./notification";
import Notify from "./notificationBar";

function App() {
    const { active, triggerNotification, closeNotification } =
        useNotification(false);
    const [type, setType] = useState(false);
    function notifyHelper(message, type, position) {
        //after api call success and failure we will call these functions sendong the response from API response
        triggerNotification({
            time: 4000,
        });
        setType({
            type,
            position,
            message,
        });
    }
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <button
                        onClick={() =>
                            notifyHelper(
                                "Congratulations",
                                "success",
                                "top-right"
                            )
                        }
                    >
                        Success
                    </button>
                    <button
                        onClick={() =>
                            notifyHelper(
                                "Something went wrong",
                                "error",
                                "bottom-right"
                            )
                        }
                    >
                        Failure
                    </button>
                </header>
            </div>
            {active && (
                <Notify type={type} closeNotification={closeNotification} />
            )}
        </>
    );
}

export default App;
