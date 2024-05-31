import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import './Hero.css';
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { Aboutme } from './Aboutme';
import {useState} from 'react'; 
import { CgProfile } from "react-icons/cg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Hero = () => {
  const[show,setShow]=useState(false);
  const[show2,setShow2]=useState("flex");
  return (
    <>
    {show && <Aboutme setShow={setShow} setShow2={setShow2} id="transform"></Aboutme>}
    <div style={{backgroundImage:"url('./flogo.png')",backgroundRepeat:"no-repeat",height:"100vh",backgroundSize:"700px",backgroundPosition:"center", display:`${show2}`,flexDirection:"column",justifyContent:"center",gap:"30px",paddingLeft:"50px",marginTop:"-60px"}}>
      <h1 style={{color:"white",fontWeight:700,fontSize:"70px"}}>Krishanu Paul</h1>
      <i><a style={{color:"white",fontWeight:500}}>FRONT END DEVELOPER</a></i>
      <button className="btn1" style={{width:"120px",height:"40px",borderRadius:"10px"}}onClick={()=>{setShow(!show);setShow2("none")}}>About Me<CgProfile id="arrow"/></button>
      <div className="links" style={{display:"flex",gap:"30px"}}>
        <a href="http://www.linkedin.com/in/krishanu-paul-559b062b7"><GrLinkedin id="social"/></a>
        <a href="https://github.com/paulkrishanu4"><FaGithub id="social"/></a>
      </div>
      <div style={{textAlign:"right",marginRight:"50px"}}>
      <AnchorLink noffset={50} href='#projects'><button className="btn2" style={{maxWidth:"200px",height:"40px",borderRadius:"10px",}}>Latest Works<FaArrowDown id="arrow2"/></button></AnchorLink>
      </div>

    </div>
    </>
  )
}
