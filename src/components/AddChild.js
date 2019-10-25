import React, { useState } from "react";

const AddChild = ({ addChild, id }) => {
  // for list of children
 console.log('my props', addChild, id)
  const [child, setChild] = useState({
    child_name: "uzias",
    parent_name: "bill",
    contact_info: "123",
    gender: "male",
    date_of_screening: "1/1/2019",
    height: "62",
    weight: "200",
    date_of_birth:'1/1/2019'
  }); // for individual child, please add more info to child once back end is set up
  console.log(child)
  // const submitForm = event => {
  //   event.preventDefault();
  //   console.log('form submitted', id, child, addChild)
  //   addChild(id, child)
  //   // setChild(""); // set form back to empty
  // };
  const handleChange = event => {
    setChild({ ...child, [event.target.name]: event.target.value });
  };
  return (
    <form>
      <input
        name="child_name"
        onChange={handleChange}
        placeholder="Child Name"
        value={child.name}
      ></input>
      <input
        name="parent_name"
        onChange={handleChange}
        placeholder="Parent Name"
        value={child.parentName}
      ></input>
      <input
        name="contact_info"
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
        onChange={(event)=>{setChild({ ...child, [event.target.name]: Number(event.target.value) });}}
        placeholder="Weight"
        value={child.weight}
      ></input>
      <input
        name="height"
        onChange={(event)=>{setChild({ ...child, [event.target.name]: Number(event.target.value) });}}
        placeholder="Height"
        value={child.height}
      ></input>
      <input
        name="date_of_screening"
        onChange={handleChange}
        placeholder="Screen Date"
        value={child.screenDate}
      ></input>
      <input
        name="date_of_birth"
        onChange={handleChange}
        placeholder="DOB"
        value={child.screenDate}
      ></input>
      <button
        onClick={e => {
          e.preventDefault()
          addChild(id, child);
        }}
      >
        Add Child
      </button>
    </form>
  );
};

export default AddChild;
