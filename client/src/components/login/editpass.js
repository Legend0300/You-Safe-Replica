import React, { useState } from 'react';

const EditPass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      newPassword.length < 8 ||
      !/\d/.test(newPassword) ||
      !/[a-zA-Z]/.test(newPassword)
    ) {
      setError(
        'Password must be at least 8 characters long and contain both letters and numbers.'
      );
    } else if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      console.log('Password updated.');
      setNewPassword('');
      setConfirmPassword('');
      setError('');
    }
  };

  return (
    <div className="form">
      <h1>Edit Password</h1>
      <img
        src="https://th.bing.com/th/id/OIP.ykI9GXZPNWCUtOI_-sjAVgHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7"
        alt="Logo"
      />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>New Password</label>
          <input
            type="password"
            name="newpassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="button-container">
          <button type="submit">Edit Password</button>
        </div>
      </form>
    </div>
  );
};

export default EditPass;
