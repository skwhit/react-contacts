import LoginForm from "./LoginForm"

const LoginPage = (props) => {
    return (
        <div>
            <LoginForm />
            <div className="text-center">
                <p>Don't have an account? <a className="text-decoration-none fw-bold" href="/register">Register</a>.</p>
            </div>
        </div>
    )
}

export default LoginPage;