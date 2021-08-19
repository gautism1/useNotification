import React, { useState } from "react";
export function useNotification(isActive) {
    const [active, setActive] = useState(isActive);

    const triggerNotification = function (specification) {
        setActive(true);
        setTimeout(function () {
            setActive(false);
        }, specification.time);
    };
    const closeNotification = function () {
        setActive(false);
    };
    return { active, closeNotification, triggerNotification };
}
