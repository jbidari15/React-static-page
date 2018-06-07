import React,{Component} from "react";
import Introduction from "./Introduction";
import headerImg from "./assets/Header-img.png";
import Properties from "./properties";
import Blog from "./blog";
import Testimonials from "./testimonials";
import Aboutus from "./aboutus";
import Footer from "./footer.js";
class App extends Component {
  render() {
    return (
      <div>
        <Introduction src={headerImg} />
        <div className="secondBigDiv">
            <Properties />
            <div className="recentWork">Recent work</div>
            <Blog />
            <div className="testimonialDiv">TESTIMONIALS    DEVELOPMENT</div>
            <Testimonials/>
           

        </div>
        <Aboutus />
        <Footer />
       
      </div>
    );
  }
}

export default App;
