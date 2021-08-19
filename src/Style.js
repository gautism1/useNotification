function setStyle(parameter) {
    let background, top, bottom, right;

    if (parameter.type === "success") {
        background = "pink";
    } else if (parameter.type === "warning") {
        background = "red";
    } else if (parameter.type === "error") {
        background = "red";
    } else {
        background = "grey";
    }

    if (parameter.position === "top-right") {
        return { top: 0, right: 0, backgroundColor: background };
    } else if (parameter.position === "bottom-right") {
        return { bottom: 0, right: 0, backgroundColor: background };
    }
}

export default setStyle;
