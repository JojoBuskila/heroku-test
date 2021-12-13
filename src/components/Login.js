import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('12345');

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVICE_PATH,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axiosInstance
      .post('/login', user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email);
    console.log(password);
  };

  return (
    <div className="">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@email.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
          />
        </div>
        <button className="primary">Login</button>
      </form>
    </div>
  );
};
export default Login;
