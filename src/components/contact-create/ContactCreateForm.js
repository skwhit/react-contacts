import React, { useState, useContext, useEffect } from "react";
// import useFormState from "../../hooks/useFormState";
import createForm from "./CreateForm.module.css"
import { UserContext } from "../../hooks/userContext";
import { v4 as uuidv4 } from 'uuid';

const ContactCreateForm = () => {

  const {contacts, setContacts} = useContext(UserContext)

  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    profilePic: ""
  }

  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state)
  }, [state])

  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setContacts([(contacts) => contacts.push(state)])
    setState(initialState)
  };

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
      <div className="w-50 d-flex flex-column gap-3 mw-500">
        <div className="w-100">
          <input
            className={createForm.input}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="w-100">
          <input
            className={createForm.input}
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="w-100">
          <input
            className={createForm.input}
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="w-100">
          <input
            className={createForm.input}
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-100">
          <input
            className={createForm.input}
            type="text"
            placeholder="Address"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </div>
        <div className="w-100">
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
          <button  className="btn btn-secondary" type="submit">Add Contact</button>
        </div>
      </div>
    </form>
  );
};

export default ContactCreateForm;
