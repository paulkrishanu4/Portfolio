import React from 'react'
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

import './Aboutme.css'

export const Aboutme = ({setShow,setShow2}) => {
  return (
    <>
    <div style={{ display: "flex",
  justifyContent: "right",
  alignItems: "right",transitionDuration:"0.3s ease"}}>
    <FaWindowClose id="close" onClick={()=>{setShow(false);setShow2("flex")}}/>
    </div>
    <div className="container" style={{display:"flex",justifyContent: "center",alignItems: "center",backgroundColor:"transparent",border:"2px solid blueviolet",padding:"50px"}}>
      <div className="sec-left" style={{display:"flex",flexDirection:"column",gap:"20px"}}>
        <div className="text">
          <h3 style={{color:"blueviolet"}}>About Me</h3>
          <p>I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.</p>
          <button>#Javascript</button>
          <button>#Html5</button>
          <button>#css</button>
          <button>#React</button>
          <button>#Bootstrap</button>
          <button>#figma</button>
          <button>#github</button>
        </div>
        <h3 style={{color:"blueviolet"}}>Skills</h3>
        <div className="skills" style={{display:"flex",gap:"30px",flexWrap:"wrap"}}>
          <FaJava id="skill"/>
          <IoLogoJavascript id="skill"/>
          <FaHtml5 id="skill"/>
          <FaCss3 id="skill"/>
          <FaReact id="skill"/>
          <FaNode id="skill"/>
          <FaBootstrap id="skill"/>
          <FaGitAlt id="skill"/>
          <FaGithub id="skill"/>
          <SiNetlify id="skill"/>
          <SiAuth0 id="skill"/>
          <FaFigma id="skill"/>
        </div>
        <h3 style={{color:"blueviolet"}}>Education</h3>
        <ul style={{color:"white",listStyle:"none",fontSize:"20px"}}>
        <li>B.Tech in Electrical Engineering</li>
        <li>Year Of Passout: 2023</li>
        <li>CGPA: 8.75 / 10</li>
        </ul>
        <h3 style={{color:"blueviolet"}}>Contact Me</h3>
      <a style={{color:"white",fontSize:"20px"}} >Gmail: paulkrishanu4@gmail.com</a>
      </div>
      
      <div className="sec-right">
        <img src="./coder.png"></img>

      </div>
    </div>
    </>
  )
}
