import React from 'react';

const Char = (props) => {

    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }

    return (
        <div style = {style}>
            <h2 onClick = {props.onLetterClick}>{props.letter}{props.index}</h2>
        </div>
    );
}

export default Char;