import React, { useState } from 'react';
import firebase from '../../Api/Firebase';

export const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logName, setLogName] = useState('');
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');

  const onRegister = async () => {
    try {
      await firebase.register(name, email, password)
    } catch (error) {
      alert(error.message)
    }
  }

  const login = async () => {
    try {
      await firebase.login(email, password)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <p>Register</p>
      <form>
        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="button" onClick={onRegister} >Register</button>
      </form>
      <form>
        <input type="text" placeholder="name" value={logName} onChange={e => setLogName(e.target.value)} />
        <input type="text" placeholder="email" value={logEmail} onChange={e => setLogEmail(e.target.value)} />
        <input type="text" placeholder="password" value={logPassword} onChange={e => setLogPassword(e.target.value)} />
        <button type="button">Login</button>
      </form>
    </>
  );
};
