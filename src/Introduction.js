import React from "react";
import BubbleDiv from "./bubbleDiv";
const Introduction = (props) => {
  return (
   <div>
      <div className="Introduction">
      <img src={props.src} alt="HeaderImage" />
      <div>
        <div className="design">
          POWERFULLY SIMPLE <span> WITH A </span> <br /> SQUEEKY CLEAN
          <span> DESIGN.</span>
        </div>
        <div>
          Find out how you can offer quick and powerful <br /> solutions to
          yourcustomers now!
        </div>
        <button>LEARN MORE</button>
      </div>
     </div>
     <BubbleDiv para={<div>CREATE A <span> POWERFUL</span> SOLUTION NOW</div>} button={"GET STARTED"} />
   </div> 
    
  );
};
export default Introduction;
