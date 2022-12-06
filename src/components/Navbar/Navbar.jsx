import React, { useContext } from "react";
import { AuthContext } from "../../hooks/authContext";

export default function Navbar() {
  const { userLogin, setUserLogin } = useContext(AuthContext);
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <h3 className="d-flex justify-content-center align-items-center fs-3 h-100">
        React Contacts Page
      </h3>
      {!userLogin ? (
        <></>
      ) : (
        <div className="d-flex justify-content-center align-items-center gap-3 h-100">
          <h3 className="d-flex align-items-center justify-content-center h-100 gap-2">
            Welcome <span className="text-primary">{userLogin.username}</span>
          </h3>
          <button
            onClick={() => setUserLogin(null)}
            className="btn btn-secondary align-self-start mx-4"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
