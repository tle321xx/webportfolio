import React from 'react';

function Profile() {
  // Check if 'user' exists in localStorage and parse it
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  // Check if user is null before accessing properties
  if (!user) {
    return (
      <div>
        <header style={{ backgroundColor: 'lightgray', padding: '1rem' }}>
          <h1>Profile</h1>
          <button onClick={handleLogout}>Logout</button>
        </header>
        <div style={{ padding: '2rem' }}>
          <p>User data not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header style={{ backgroundColor: 'lightgray', padding: '1rem' }}>
        <h1>Profile</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <img
          src={user.avatar}
          alt="User Avatar"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
        <h2>
          Welcome {user.fname} {user.lname}
        </h2>
      </div>
    </div>
  );
}

export default Profile;
