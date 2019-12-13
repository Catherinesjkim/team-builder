import React, { useState } from "react";

const BuildForm = props => {
  const [build, setBuild] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setBuild({ ...build, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewBuilds(build);
    setBuild({ name: "", email: "", role: "" });
  };
  console.log("build state", build);

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter a name"
        onChange={handleChanges}
        value={build.name}
      />
      <label htmlFor="email">Email</label>
      <textarea
        id="email"
        name="email"
        placeholder="Add Email here"
        onChange={handleChanges}
        value={build.email}
      />
      <label htmlFor="role">Role</label>
      <textarea
        id="role"
        name="role"
        placeholder="Add Role here"
        onChange={handleChanges}
        value={build.role}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default BuildForm;