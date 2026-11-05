
import React from "react";
import "./Home.css";
import me from "../../assets/me-removebg-preview.png";


function Home() {

  return (
    <div id="home">
      <div id="leftHome">
        <div className="details">
          <div className="line1">I'M</div>

          <div className="line2">ISHIKA SHRESTHA</div>

          <div className="line3">
            WEB DEVELOPER
          
          </div>
          <div><button>Hire Me</button></div>
        </div>
      </div>

      <div id="rightHome">
        <img src={me} alt="Ishika Shrestha" className="image" />
      </div>
    </div>
  );
}

export default Home;
