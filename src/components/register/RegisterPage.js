import RegisterForm from './RegisterForm';

const RegisterPage = (props) => {
    return (
        <div>
            <RegisterForm />
            <div className="text-center">
                <p>Already have an account? <a className="text-decoration-none fw-bold" href="/login">Login</a>.</p>
            </div>
        </div>
    )
}

export default RegisterPage;