import React from "react";
import Header from "./components/header";
import Todoitem from "./components/todoitem";
import Button from "./components/buttons";
import "./style.css"


function App() {
  return (
    <div className="todo-container">
      <Header header="Todoie App"/> 
      <Todoitem completed ={true} text="Eat"/>
      <Todoitem text="Code"/>
      <Todoitem text="Play"/>
      <Todoitem text="DSA"/>
      <Todoitem text="WEBD"/>
      <Button />
    </div>
    
  );
}
 
export default App;
