import React from 'react';
import login from "./Login.module.css"

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        
    }

    render() {
        return (
            <form className="d-flex flex-column align-items-center p-4 gap-2" onSubmit={this.handleFormSubmit}>
                <div className={login.inputContainer}>
                    <label htmlFor="username"></label>
                    <input 
                        className={login.input}
                        id="username"
                        name="username"
                        type="text" 
                        placeholder="Username"  
                        value={this.state.username}
                        onChange={this.handleInputChange}
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
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <button className="btn btn-secondary" type="submit">Login</button>
                </div>
            </form>
        )
    }
}

export default LoginForm;