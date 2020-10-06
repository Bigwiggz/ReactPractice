import React from "react";
import "./styles.css";
import ItemList from "./components/ItemList";
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <MyInfo />
      <ItemList />
      <Footer />
    </div>
  );
}
