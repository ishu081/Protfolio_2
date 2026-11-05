
import React from "react";
import "./Home.css";
import me from "../../assets/me-removebg-preview.png";
import TypingEffect from "react-typing-effect";


function Home() {
  console.log("TypingEffect:", TypingEffect);

  return (
    <div id="home">
      <div id="leftHome">
        <div className="details">
          <div className="line1">I'M</div>

          <div className="line2">ISHIKA SHRESTHA</div>

          <div className="line3">
            WEB DEVELOPER
            {/* <TypingEffect
              text={["WEB DEVELOPER", "SOFTWARE DEVELOPER"]}
              speed={50}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
              cursor="_"
            /> */}
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
