import RegisterForm from "./RegisterForm";

const RegisterPage = (props) => {
  return (
    <div>
      <RegisterForm />
      <div className="text-center">
        <p>
          Don't have an account?{" "}
          <a className="text-decoration-none fw-bold" href="/login">
            Register
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
