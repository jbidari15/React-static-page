import React from 'react';
import Icons from "./icons";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="copyright">COPYRIGHT 2003.ALL RIGHTS RESERVED</div>
            <div className="icons">
                <Icons icon={<i class="fab fa-twitter"></i>}/>
                <Icons icon={<i class="fab fa-facebook-square"></i>}/>
                <Icons icon={<i class="fas fa-code-branch"></i>}/>
                <Icons icon={<i class="fab fa-twitter"></i>}/>
                <Icons icon={<i class="fab fa-google-plus-square"></i>}/>
                <Icons icon={<i class="fab fa-pinterest-square"></i>}/>
            </div>
         
        </div>
    )
}
export default Footer;