import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const initialUsers = [
  { id: 23, username: 'Username1', pricingPlan: 'Premium', status: 'Approved', createdDate: '24 Oct 21', basicInfo: 'Admin' },
  { id: 24, username: 'Username2', pricingPlan: 'Free', status: 'Approved', createdDate: '24 Oct 21', basicInfo: 'Admin' },
  { id: 25, username: 'Username3', pricingPlan: 'Premium', status: 'Approved', createdDate: '24 Oct 21', basicInfo: 'Admin' },
  { id: 26, username: 'Username4', pricingPlan: 'Free', status: 'Banned', createdDate: '24 Oct 21', basicInfo: 'Admin' },
  { id: 27, username: 'Username5', pricingPlan: 'Free', status: 'Approved', createdDate: '24 Oct 21', basicInfo: 'Admin' },
  { id: 28, username: 'Username6', pricingPlan: 'Free', status: 'Approved', createdDate: '24 Oct 21', basicInfo: 'Admin' },
  { id: 29, username: 'Username7', pricingPlan: 'Cinematic', status: 'Approved', createdDate: '24 Oct 21', basicInfo: 'Admin' },
];

function User() {
  const [users, setUsers] = useState(initialUsers);

  const handleStatusChange = (id, newStatus) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: newStatus } : user
    ));
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="app">
      <div className="main-container">
        <div className="table-container">
          <h2 className="title">Users</h2> {/* Title added here */}
          <table className="data-table">
            <thead>
              <tr>
                <th className="header-cell">ID</th>
                <th className="header-cell">BASIC INFO</th>
                <th className="header-cell">USERNAME</th>
                <th className="header-cell">PRICING PLAN</th>
                <th className="header-cell">STATUS</th>
                <th className="header-cell">CREATED DATE</th>
                <th className="header-cell">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="data-row">
                  <td className="data-cell">{user.id}</td>
                  <td className="data-cell">
                    <div className="user-info">
                      <span className="user-icon">
                        <i className="fas fa-user"></i>
                      </span>
                      <span className="user-name">{user.basicInfo}</span>
                    </div>
                  </td>
                  <td className="data-cell">{user.username}</td>
                  <td className="data-cell">{user.pricingPlan}</td>
                  <td className="data-cell">
                    <span className={`status ${user.status === 'Approved' ? 'approved-status' : 'banned-status'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="data-cell">{user.createdDate}</td>
                  <td className="data-cell">
                    <button className="action-button" onClick={() => handleStatusChange(user.id, 'Approved')}>
                      <i className="fas fa-check-circle"></i>
                    </button>
                    <button className="action-button" onClick={() => handleStatusChange(user.id, 'Banned')}>
                      <i className="fas fa-ban"></i>
                    </button>
                    <Link to={`/edit-user`} className="action-button">
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button className="action-button" onClick={() => handleDeleteUser(user.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
