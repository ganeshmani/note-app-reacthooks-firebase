import React from "react";
import AddNote from "./AddNote";
import NoteLists from "./NoteLists";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Note Taking App</h2>
      <p>using React Hooks and Firebase</p>
      <AddNote />
      <h3>Notes : </h3>
      <NoteLists />
    </div>
  );
}

export default App;
