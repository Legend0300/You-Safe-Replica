import React from "react";

const EditPass = () => {
    return (
        <div className="form">
        <h1>Edit Password</h1>
        <img
            src="https://th.bing.com/th/id/OIP.ykI9GXZPNWCUtOI_-sjAVgHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Logo"
        />
        <form>
            <div className="input-container">
            <label>New Password </label>
            <input type="password" name="newpassword" required />
            </div>
            <div className="input-container">
            <label>Confirm New Password </label>
            <input type="password" name="confirmpassword" required />
            </div>
            <div className="button-container">
            <button type="submit">Edit Password</button>
            </div>
        </form>
        </div>
    );
    }

export default EditPass;