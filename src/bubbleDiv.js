import React from "react";

const BubbleDiv=(props)=>{
    return(
        <div className="bubbleDiv">
            <div>{props.para}</div>
            <button>{props.button}</button>
        </div>
    )
}

export default BubbleDiv;