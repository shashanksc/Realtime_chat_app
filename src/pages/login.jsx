import React from "react";
import './../app.scss';

const login = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Realtime Chat</span>
                <span className="title">Login</span>
                <form className="form">
                    <input type="text" placeholder="username"/>
                    
                    <input type="password" placeholder="password"/>
                    
                    <button>Login</button>
                </form>
                <p>don't have an account? Register</p>
            </div>
            
        </div>
    );
}
export default login;