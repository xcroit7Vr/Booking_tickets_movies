import React, { useState } from 'react';

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    login: 'User123',
    email: 'email@email.com',
    firstName: 'John',
    lastName: 'Doe',
    subscription: 'Basic',
    rights: 'User',
  });

  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  return (
    <div className="profile-details-container">
      <h2>Edit Users</h2>
      <div className="form-container">
        <div className="profile-details">
          <h3>Profile details</h3>
          <div className="profile-details-row">
            <div>
              <label>Login</label>
              <input
                type="text"
                name="login"
                value={profile.login}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Subscription</label>
              <select
                name="subscription"
                value={profile.subscription}
                onChange={handleChange}
              >
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <div>
              <label>Rights</label>
              <select
                name="rights"
                value={profile.rights}
                onChange={handleChange}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>
          <button className="save-button">SAVE</button>
        </div>
        <div className="change-password">
          <h3>Change password</h3>
          <div>
            <label>Old password</label>
            <input
              type="password"
              name="oldPassword"
              value={passwords.oldPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label>New password</label>
            <input
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label>Confirm new password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="change-button">CHANGE</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
