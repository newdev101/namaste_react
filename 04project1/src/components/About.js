import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }

  async componentDidMount() {

     console.log("parent-componentDidMount");
   
  }
  render() {
    console.log("parent-render");
     return(
          <div>
               <h1>About</h1>
               <Profile />
          </div>
     )
  }
}

export default About;
