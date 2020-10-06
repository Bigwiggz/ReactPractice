import React from "react";
import "../styles.css";

//Javascript
function MyInfo() {
  return (
    <div>
      <h1>Brian Wiggins</h1>
      <p>
        Hello, my name is Brian Wiggins I am a Mechanical Engineer with the
        University of South Carolina. I am also one of Jehovah's Witnesses.
      </p>
      <h3>Things I love to do</h3>
      <ul>
        <li>Read the Bible</li>
        <li>Computer Programming</li>
        <li>Learning</li>
      </ul>
      <p>______________________________________</p>
    </div>
  );
}

export default function App() {
  return <MyInfo />;
}
