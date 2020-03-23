import React, { useEffect, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.css';
import { getUsers } from '../../Api/Api';

export const LoginTemplate = ({ setUsers, users, setLoggedIn, loggedIn }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  const loadUsers = useCallback(async() => {
    const usersFromServer = await getUsers();

    setUsers(usersFromServer);
  }, [setUsers]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const login = () => {
    const usersFromServ = [...users];
    const target = usersFromServ
      .find(user => (
        user.username === usernameInput && user.password === passwordInput
      ));

    if (target) {
      setLoggedIn(true);
    } else {
      setError('The username or password you entered is incorrect');
    }
  };

  return loggedIn ? <Redirect to="/profile" /> : (
    <form>
      <p>{error}</p>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Username
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={usernameInput}
            onChange={e => setUsernameInput(e.target.value.trim())}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          Password
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value.trim())}
          />
        </label>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={login}
      >
        Submit
      </button>
    </form>
  );
};

LoginTemplate.defaultProps = {
  users: [],
};

LoginTemplate.propTypes = {
  setUsers: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({})),
  loggedIn: PropTypes.bool.isRequired,
};
