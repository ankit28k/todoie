import React from "react";
import Header from "./components/header";
import Todoitem from "./components/todoitem";
import Button from "./components/buttons";
import "./style.css"


function App() {
  return (
    <div className="todo-container">
      <Header /> 
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Button />
    </div>
    
  );
}
 
export default App;
