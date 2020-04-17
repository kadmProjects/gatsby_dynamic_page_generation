import React from "react";
import "./bottomLayout.css";

const BottomLayout = (props) => {

    return (
        <div>
            <h3>BottomLayout</h3>
            { props.children }
        </div>
    )
}

export default BottomLayout
