import React from "react";
import "./middleLayout.css";

const MiddleLayout = (props) => {

    return (
        <div>
            <h3>MiddleLayout</h3>
            { props.children }
        </div>
    )
}

export default MiddleLayout
