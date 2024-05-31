import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import './Hero.css'
export const Footer = () => {
  return (
    <div style={{textAlign:"center",marginBottom:"100px"}}>
      <div>
      <a href="#"><img src="./flogo.png" height="100px" style={{filter:"grayscale(100%) invert(1) brightness(2)"}}></img></a>
    </div>
    <div className="links" style={{color:"white",display:"flex",gap:"30px",justifyContent:"center"}}>
    <a href="http://www.linkedin.com/in/krishanu-paul-559b062b7"><GrLinkedin id="social"/></a>
        <a href="https://github.com/paulkrishanu4"><FaGithub id="social"/></a>
    </div>

    </div>
  )
}
