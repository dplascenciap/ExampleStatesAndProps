import React from "react";

const Views = (props) => {
    return (
        <section>
            {props.parentToggle ? <h1>Views={props.numberOfViews}</h1> : ""}
            <button onClick={props.parentToggleClass}>Toggle</button>
        </section>
    )
}

export default Views;