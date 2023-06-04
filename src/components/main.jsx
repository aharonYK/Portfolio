import React from "react";
import "../style/main.css" 
import icon from "../Assets/avataaars.png"
import git from "../Assets/github.png"
import link from "../Assets/linkedin.png"


import pc from "../Assets/Programming Customizable Isometric Illustrations _ Amico Style.png"
import Typewriter from"./type.jsx"
import WhatsAppButton from './whatsapp';

const Main = () => {
    
    return ( 
        <div>
    <div className="home">
    <div className="hi" >Hi THERE,</div>
 <div className="txt">I'm Aharon Karsenti,</div>

<Typewriter/>
</div>

<img src={pc} alt="pc" className="pc"/>
<div className="introduction">
<h2>Let Me Tell You A Little About Myself:</h2>
<p>
  I first started learning to code when I was 25. I have always loved riddles, and when I began writing my own programs and websites,
  <br />
   I realized it was just like solving a puzzle that I was truly connected to. I developed a deep passion for coding and fell in love with it.

  <br /><br />

  Although I consider myself a junior developer, my passion, hard work, and ability to concentrate have enabled me to achieve significant milestones in my life.
  <br/>
  <br />
   I am dedicated to continuous learning and growth in the field of software development.
<br />
<br />
I gained hands-on experience with various technologies in both back-end and front-end development, including <span className="L">React, Python, JavaScript, Node.js, MongoDB, and SQL</span>.
</p>
</div>

<img src={icon} alt="Me" className="Avatar" />
    
<div className="social">
  <h3>Find me on:</h3>
 <a href="https://github.com/aharonYK"><img src={git} alt="" /></a> 
  <a href="https://www.linkedin.com/in/aharon-karsenti/"><img src={link} alt="" /></a>  
 
</div>
<WhatsAppButton/>
    </div>);
}
 
export default Main ;