import React, { useState, useContext } from "react";
import login from "./Login.module.css";
import { AuthContext } from "../../hooks/authContext";

const LoginForm = () => {
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
      <div className={login.inputContainer}>
        <label htmlFor="username"></label>
        <input
          className={login.input}
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={handleInputChange}
        />
      </div>
      <div className={login.inputContainer}>
        <label htmlFor="password"></label>
        <input
          className={login.input}
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

export default LoginForm;
