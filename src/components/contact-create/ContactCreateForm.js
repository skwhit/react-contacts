import React, { useState } from "react";
// import useFormState from "../../hooks/useFormState";
import createForm from "./CreateForm.module.css"

const ContactCreateForm = () => {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    profilePic: ""
  });

  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(state.profilePic)

  return (
    <form className="container-fluid d-flex justify-content-center gap-5 py-5 bg-lightgrey" onSubmit={handleSubmit}>
      <div className={createForm.imgContainer}>
        {
          (!state.profilePic.length ? (
            <img className={createForm.img}
              src="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"
              alt="Profile preview."
            />
          ) : (
            <img className={createForm.img} src={state.profilePic} alt="Profile preview." />
          ))
        }
      </div>
      <div className="w-50 d-flex flex-column justify-content-center gap-3">
        <div>
          <input
            className={createForm.input}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={createForm.input}
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={createForm.input}
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={createForm.input}
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={createForm.input}
            type="text"
            placeholder="Address"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={createForm.input}
            type="text"
            placeholder="Profile Picture Url"
            name="profilePic"
            value={state.profilePic}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-left">
          <button  className="btn bg-secondary text-white shadow-lg" type="submit">Add Contact</button>
        </div>
      </div>
    </form>
  );
};

export default ContactCreateForm;
