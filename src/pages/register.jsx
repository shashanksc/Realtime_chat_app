import React from "react";
import './../app.scss';

const register = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Realtime Chat</span>
                <span className="title">Register</span>
                <form className="form">
                    <input type="text" placeholder="username"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="file" id="file" style={{display:"none"}}/>
                    <label htmlFor="file">
                        <img src="src/img/addAvatar.png" alt="" />
                        <span>add an avatar</span>
                    </label>
                    <button>Register</button>
                </form>
                <p>already have an account? login</p>
            </div>
            
        </div>
    );
}
export default register;