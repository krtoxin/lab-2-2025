import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

function Profile({ name, role, avatarUrl }) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="profile-avatar" />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default Profile;
