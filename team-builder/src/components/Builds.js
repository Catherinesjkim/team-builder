import React from "react";

const Builds = props => {
  return (
    <div className="build-list">
      {props.buildsList.map(build => (
        <div className="build" key={build.id}>
          <h2>{build.name}</h2>
          <p>{build.email}</p>
          <p>{build.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Builds; 