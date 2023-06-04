import React from "react";
import "../style.css" ;
import home from "../Assets/home.png"
import doc from"../Assets/document.png"
import glob from"../Assets/globe.png"
import user from"../Assets/user.png"
import logo from"../Assets/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="all">
       <img src={logo} className="logo" alt="" />
<div className="Header">

<Link to="/"> <button className="buttonH"><img src={home} alt="" className="img1" /> Home</button></Link>
<Link to="/about"> <button className="buttonH"><img src={user} alt="" className="img1" />About</button></Link>
<Link to="/projects" > <button className="buttonH"><img src={glob} alt="" className="img1" />Projects</button></Link>
   <Link to="/resume"> <button className="buttonH"><img src={doc} alt="" className="img1" />Resume</button></Link>


</div></div>
     );
}
 
export default Header;