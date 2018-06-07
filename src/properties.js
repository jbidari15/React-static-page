import React from 'react';
import SingleProperty from "./singleproperty"
const Properties =()=>{
    return(
        <div className="properties">
            <SingleProperty icon={   <i class="fas fa-mobile-alt"></i>} 
                            heading={<div><span>SUPERBLY</span> RESPONSIVE</div>}
                        detail={ <div>Bacon ipsum dolor amet pork belly pork filet mignon corned beef t-bone brisket ground round. Turducken jowl chicken hamburger pork belly tongue tail leberkas pancetta meatloaf. </div> }
          
        />
        <SingleProperty icon={   <i class="fas fa-tv"></i>} 
                            heading={<div><span>SQUEEKY</span> CLEAN</div>}
                        detail={ <div>Bacon ipsum dolor amet pork belly pork filet mignon corned beef t-bone brisket ground round. Turducken jowl chicken hamburger pork belly tongue tail leberkas pancetta meatloaf. </div> }
          
        />
        <SingleProperty icon={   <i class="fas fa-mobile-alt"></i>} 
                            heading={<div><span>MULTI </span>PURPOSE</div>}
                        detail={ <div>Bacon ipsum dolor amet pork belly pork filet mignon corned beef t-bone brisket ground round. Turducken jowl chicken hamburger pork belly tongue tail leberkas pancetta meatloaf. </div> }
          
        />
        <SingleProperty icon={   <i class="fas fa-mobile-alt"></i>} 
                            heading={<div><span>HIGHLY</span> FLEXIBLE</div>}
                        detail={ <div>Bacon ipsum dolor amet pork belly pork filet mignon corned beef t-bone brisket ground round. Turducken jowl chicken hamburger pork belly tongue tail leberkas pancetta meatloaf. </div> }
          
        />
        </div>
    )
}

export default Properties;