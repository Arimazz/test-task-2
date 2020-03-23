import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const ProfileTemplate = ({ loggedIn }) => (
  !loggedIn ? <Redirect to="/login" /> : <h2>Its profile page</h2>
);

ProfileTemplate.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
