import React from "react";
import "./rightLayout.css";

const RightLayout = (props) => {

    return (
        <div>
            <h3>RightLayout</h3>
            { props.children }
        </div>
    )
}

export default RightLayout
