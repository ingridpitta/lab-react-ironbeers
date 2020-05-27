import React from "react";
import "./title.css";

const Title = ({text}) => {
    return (
        <div className="title--container">
        <h2>{text}</h2>
        </div>
    )
}

export default Title;