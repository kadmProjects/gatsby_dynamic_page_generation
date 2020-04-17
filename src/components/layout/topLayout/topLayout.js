import React from "react";
import "./topLayout.css";

const TopLayout = (props) => {

    return (
        <div>
            <h3>TopLayout</h3>
            { props.children }
        </div>
    )
}

export default TopLayout
