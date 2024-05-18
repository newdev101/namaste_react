import React from "react";
import ReactDOM from "react-dom/client";

const heading_element = (
  <div id="container">
    <h1>Hello from React element</h1>
    <h4>Hi from React Element</h4>
  </div>
);

const Title = () => <h1>Namaste React!!!</h1>;
const str ="anything";
const React_componect = () => {
     return (
          <div >
               {2+4}
            { console.log("hello")}
            <h1>Hello from React element</h1>
            <h4>Hi from React Element</h4>
          </div>
        );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React_componect />);
