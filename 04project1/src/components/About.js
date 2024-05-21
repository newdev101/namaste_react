import { Component } from "react";
import { Outlet } from "react-router-dom";
import Shimmer from "./Shimmer";

const About = ()=>{
  return(
    <div id="about-container" className="h-[500px]">
      <Shimmer cnt={5} page="About" />
      <Outlet />
    </div>
 )
}
export default About;
