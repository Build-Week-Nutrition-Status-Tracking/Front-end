import React, { useState } from "react";

const AddChild = ({ setChildren, children }) => {
  // for list of children
  const [child, setChild] = useState({
    name: "",
    parentName: "",
    contactInfo: "",
    gender: "",
    screenDate: "",
    height: "",
    weight: ""
  }); // for individual child, please add more info to child once back end is set up
  const submitForm = event => {
    event.preventDefault();
    setChildren([...children, child]);
    setChild(""); // set form back to empty
  };
  const handleChange = event => {
    setChild({ ...child, [event.target.name]: event.target.value });
  };
  return (
    <form>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Child Name"
        value={child.name}
      ></input>
      <input
        name="parentName"
        onChange={handleChange}
        placeholder="Parent Name"
        value={child.parentName}
      ></input>
      <input
        name="contactInfo"
        onChange={handleChange}
        placeholder="Contact Info"
        value={child.contactInfo}
      ></input>
      <input
        name="gender"
        onChange={handleChange}
        placeholder="Gender: male/female"
        value={child.gender}
      ></input>
      <input
        name="weight"
        onChange={handleChange}
        placeholder="Weight"
        value={child.weight}
      ></input>
      <input
        name="height"
        onChange={handleChange}
        placeholder="Height"
        value={child.height}
      ></input>
      <input
        name="screenDate"
        onChange={handleChange}
        placeholder="Screen Date"
        value={child.screenDate}
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
