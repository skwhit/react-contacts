import React, { useContext, useState } from "react";
import register from "./Register.module.css";
import { AuthContext } from "../../hooks/authContext";

const RegisterForm = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const { userLogin, setUserLogin } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("hey");
    if (!state.username.length) {
      alert("Please enter a valid username");
    } else if (!state.password.length) {
      alert("Please enter a valid password");
    } else {
      setUserLogin(state);
    }
  };

  return (
    <form
      className="d-flex flex-column align-items-center p-4 gap-2"
      onSubmit={handleFormSubmit}
    >
      <div className={register.inputContainer}>
        <label htmlFor="username"></label>
        <input
          className={register.input}
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={handleInputChange}
        />
      </div>
      <div className={register.inputContainer}>
        <label htmlFor="password"></label>
        <input
          className={register.input}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button className="btn btn-secondary" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
