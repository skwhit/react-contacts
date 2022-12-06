import LoginForm from "./LoginForm";

const LoginPage = (props) => {
  return (
    <div>
      <LoginForm />
      <div className="text-center">
        <p>
          Already have an account?{" "}
          <a className="text-decoration-none fw-bold" href="/register">
            Login
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
