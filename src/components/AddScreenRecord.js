import React, { useState } from "react";

const AddScreenRecord = ({ setChildren, children }) => {
  // for list of children
  const [child, setChild] = useState({ name: "", parentName: "" }); // for individual child, please add more info to child once back end is set up
  const submitForm = event => {
    event.preventDefault();
    setChildren([...children, child]);
    setChild(""); // set form back to empty
  };
  const handleName = event => {
    setChild({ ...child, [event.target.name]: event.target.value });
  };
  return (
    <form>
      <input
        name="name"
        onChange={handleName}
        placeholder="Child Name"
        value={child.name}
      ></input>
      <input
        name="parentName"
        onChange={handleName}
        placeholder="Parent Name"
        value={child.parentName}
      ></input>
      <button
        onClick={e => {
          submitForm(e);
        }}
      >
        Add Child
      </button>
    </form>
  );
};

export default AddChild;
