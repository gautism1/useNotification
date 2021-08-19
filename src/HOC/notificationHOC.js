import React from "react";
const HOC = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "",
            };
        }
        render() {
            return (
                <div>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    };
};
export default HOC;
