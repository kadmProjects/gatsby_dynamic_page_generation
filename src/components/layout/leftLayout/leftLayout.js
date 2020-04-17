import React from "react";
import "./leftLayout.css";

const LeftLayout = (props) => {
    console.log(props);

    return (
        <div>
            <h3>LeftLayout</h3>
            { props.children }
        </div>
    )
}

export default LeftLayout
