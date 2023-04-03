import React from 'react';
const { useState } = require("react");


function Login() {
    // Generate JSX code for error message

const [username , setUsername] = useState(''); // username is the state variable, setUsername is the function to update the state variable
const [password , setPassword] = useState(''); // password is the state variable, setPassword is the function to update the state variable

const handleSubmit = (event) => {
    // Prevent page reload
    console.log(username, password);
    setUsername('');
    setPassword('');
    event.preventDefault();
    // Get form data
};



    return(
<div className="form">

      <h1>Login</h1>
    <img src="https://th.bing.com/th/id/OIP.ykI9GXZPNWCUtOI_-sjAVgHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7" alt="Logo" />
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input  value={username}
          onChange={(e) => setUsername(e.target.value)} type="text" name="username" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input  value={password}
          onChange={(e) => setPassword(e.target.value)} type="password" name="password" required />
       </div>
       <div className="button-container">
        <button type='submit'>Forgot Password?</button>
        <input type="submit" placeholder='Login'/>
       </div>
     </form>
   </div>

    )
}

export default Login;