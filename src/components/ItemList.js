import React from "react";
import "../styles.css";

//Javascript
function ItemList() {
  return (
  <div>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  </div>
  );
}

export default function App(){
  return <ItemList />;
}
