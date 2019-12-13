import React, { useState } from 'react';
import ReactDom from "react-dom";

import Builds from "./components/Builds";
import BuildForm from "./components/BuildForm";

import data from "./data";
import './App.css';

function App() {
  const [builds, setBuilds] = useState(data);

  const addNewBuilds = build => {
    const newBuild = {
      id: Date.now(),
      name: build.name,
      email: build.email,
      role: build.role
    };
    const newBuildCollection = [...builds, newBuild];
    setBuilds(newBuildCollection);
  };

  return (
    <div className="App">
      <h1>My Team Builder</h1>
      <BuildForm addNewBuilds={addNewBuilds} />
      <Builds buildsList={builds} />
    </div>
  );
}

export default App;
