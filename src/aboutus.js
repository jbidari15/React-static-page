import React from 'react';
import ShadowDiv from './shadowdiv';

const Aboutus = ()=>{
    return(
        <div className="Details">
            <div className="aboutus">
                 <div className="title">ABOUT US</div>
                <div>shank rump flank corned beef spare ribs pork chop tail picanha kevin cow ham strip steak shankle. Landjaeger tail shank venison frankfurter pastrami buffalo beef t-bone biltong chuck turducken meatloaf. Filet mignon drumstick sausage brisket, jerky ham kevin andouille.</div>
                <br />
                <div>123 Street Home</div>
                <div>Real Name</div>
                <div>London</div>
                <div>+44434546578</div>
            </div>
            <div className="aboutus">
                <div className="title"> LATEST TWEETS</div>
                <div> biltong chuck turducken meatloaf  Filet mignon drumstick  Turducken ham hock shank rump flank corned beef spare ribs pork chop tail picanha kevin cow ham strip steak shankle. Landjaeger tail shank venison frankfurter pastrami buffalo beef t-bone biltong chuck turducken meatloaf. </div><br/>
                <div>unit allows you to set the size of a track as a fraction of the free space of the grid container.</div>
            </div>
            <div className="latestpost">
                <div className="title">LATEST POSTS</div>
                <div  >Turducken ham hock </div>
                <div>shank rump flank corned </div>
                <div>Turducken ham hock shank rump flank</div>
                <div>Landjaeger tail shank venison frankfurter pastrami buffalo beef</div>
            </div>
            <div className="shadowDiv">
                <div className="title">FLICKR</div>
                 <div className="firstshadow">
                     <ShadowDiv />
                     <ShadowDiv />
                     <ShadowDiv />
                     <ShadowDiv />
                </div>
               <div>
                     <ShadowDiv />
                     <ShadowDiv />
                     <ShadowDiv />
                     <ShadowDiv />
               </div>
              
            </div>
               
        </div>
    )
}
export default Aboutus;