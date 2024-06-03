import React from "react";
import "./style.css";

function Subitle({ children, color }) {
    return <h1 className={`subtitle${color ? ` subtitle_${color}` : ""}`}>{children}</h1>;
}

export default Subitle;
