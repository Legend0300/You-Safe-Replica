import React from "react";

const ForgotPass = () => {
    return (
        <div className="form">
            <h1>Forgot Password</h1>
        <img
            src="https://th.bing.com/th/id/OIP.ykI9GXZPNWCUtOI_-sjAVgHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Logo"
        />
        <form>
            <div className="input-container">
            <label>Email </label>
            <input type="email" name="email" required />
            </div>
            <div className="button-container">
            <button type="submit">Reset Password</button>
            </div>
        </form>
        </div>
    );
    }

export default ForgotPass;