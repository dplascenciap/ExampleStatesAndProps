// Step 1: Import React
import React from "react";

// Step 2: Create the function "Nav"
const Tweet = (props) => (
    <div>
        <h3>{props.user}</h3>
        <li>{props.msg}</li>
    </div>
)

export default Tweet;