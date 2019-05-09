import React from 'react';

const MAX_LENGTH = 50;
const MIN_LENGTH = 5;

const Validation = (props) => {

    let displayText = null;

    if(props.textLength < MIN_LENGTH){
        displayText = <h1>Text too short</h1>
    }else if(props.textLength > MAX_LENGTH){
        displayText = <h1>Text too long</h1>
    }else{
        displayText = <h1>Just Right</h1>
    }

    return(
        <div>
            <h1>Text Length: {props.textLength}</h1>
            {displayText}
        </div>
         
    )
}

export default Validation;