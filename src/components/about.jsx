import React, { useState, useEffect } from 'react';
import "../style/about.css"
import GitHubCalendar from 'react-github-calendar';

const About = () => {

    const [saying, setSaying] = useState('');
    const [author, setAuthor] = useState('');
    
    
  
    useEffect(() => {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          setSaying(data.content);
          setAuthor(data.author);
        });
    }, []);

  return ( 
  <>
    <div className='ab' data-aos="fade-up">
      <h2 >Who I am:</h2>
      <p>
        Hello everyone, I'm Aharon Karsenti from Etz Efraim, Israel
      </p>
      <p className="highlight">
        I am a Junior full-stack developer. I learned to become a full-stack developer at Cyber Pro Israel through a comprehensive 5-month course.
      </p>
      <p>
        Despite having no prior experience in the field, I was determined to learn and succeed.
      </p>
      <p>
        The program was provided by the army, and I am incredibly grateful for the scholarship I received due to my previous service as an officer.
      </p>
      <p>
        It provided me with a valuable opportunity to pursue my passion.
      </p>
      <p>
        Throughout the course, I gained hands-on experience with various technologies in both back-end and front-end development.
      </p>
    </div>
  <br /><br /> 
<div data-aos="fade-up-right" className="audiowide">
<p >"{saying}"</p>
<p >,{author}</p>
</div>


<div className='table'>
<h2 className='head'>Profssional <span className=''>Skillet:</span> </h2>
<div className='teck'>
      <div className="box" data-aos="fade-up"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" className='skill' />
        <span className='title' >HTML</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="" className='skill' />
        <span className='title'>CSS</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" className='skill' />
        <span className='title'>JavaScript</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" className='skill' />
        <span className='title'>React</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="" className='skill' />
        <span className='title'>Bootstrap</span></div>
</div>

<div className='teck'>
      <div className="box" data-aos="fade-up"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="" className='skill' />
        <span className='title' >Node.js</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="" className='skill' />
        <span className='title'>Post-Man</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" className='skill' />
        <span className='title'>Express</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="" className='skill' />
        <span className='title'>Python</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg" alt="" className='skill' />
        <span className='title'>Postgress</span></div>
</div>

<div className='teck'>
      <div className="box" data-aos="fade-up"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="" className='skill' />
        <span className='title' >Git</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" className='skill' />
        <span className='title'>Tail-Wind</span></div>
      <div className="box" data-aos="fade-up"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" alt="" className='skill' />
        <span className='title'>MongoDB</span></div>

</div>
</div><h2>My Git:</h2>
<div class="container">
<GitHubCalendar username="aharonYK" />
</div>
    </>
    );
}
 
export default About;