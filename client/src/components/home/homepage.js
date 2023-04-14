import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>My profile</h1>
      Employee Fields
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>Email: {}</li>
        <li>Account type: {}</li>
        <li>Employee id: {}</li>
      </ul>
      <button>
        <a href="">Change Password</a>
      </button>
      <button>
        <a href="">Contact us</a>
      </button>
      <button>
        <a href="">Refresh application</a>
      </button>
      <button>
        <a href="">Logout</a>
      </button>
    </div>
  );
};

export default HomePage;
