import React from 'react';
import Description from './description';

const Testimonials =()=>{
    return(
        <div className="testimonials">
            <div className="testimony" >
                 <Description blogTitle={<div>John Smith</div>}/>
                <Description blogTitle={<div>John Smith</div>}/>
                <Description blogTitle={<div>John Smith</div>}/>
                <Description blogTitle={<div>John Smith</div>}/>
            </div>
             <div className="TheDesign">
                 <div className="designTitle"> 
                    <div>DESIGN</div>
                    <div>PRODUCTION</div>
                 </div>
                <div className="MainDesign">
                    <div className="designIt">The Design</div>
                    <div>unit allows you to set the size of a track as a fraction of the free space of the grid container. For example, this will set each item to one third the width of the grid container:</div>
                    <div>unit allows you to set the size of a track as a fraction of the free space of the grid container. For example, this will set each item to one third the width of the grid container:</div>
                    <div className="buttonDiv"><button>READ MORE</button></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;