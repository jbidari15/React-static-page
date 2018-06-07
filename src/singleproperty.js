import React from 'react';

const SingleProperty =(props)=>{
    return(
        <div className="singleProperty">
          <div className="icon">{props.icon}</div>
          <div>{props.heading}</div>
          <div>{props.detail}</div>
          <button>READ MORE</button>
        </div>
    )
}
export default SingleProperty;