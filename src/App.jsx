import React from "react";
import "./App.css"; 
import Tabs from "./Tabs";

const tabs = [
  { label: "Tab 1", content: "Tab 1 content is showing here" },
  { label: "Tab 2", content: "Tab 2 content is showing here" },
  { label: "Tab 3", content: "Tab 3 content is showing here" }
];

const App = () => {
  return (
    <div className= "App">
      <Tabs tabs={tabs} /> 
    </div>
  );
};

export default App;