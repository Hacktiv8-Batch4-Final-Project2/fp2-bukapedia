import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, userLogin } from '../../components/store/reducers/Login';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const account = {
    username: 'admin@bukapedia.com',
    password: 'admin123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = values.username;
    const password = values.password;
    if (username === account.username && password === account.password) {
      navigate('/admin');
      dispatch(
        login({
          admin: true,
          username: username,
          password: password
        })
      );
    } else if (username && password) {
      dispatch(userLogin({ username, password }));
      navigate('/');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-lg p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-3">
          <label htmlFor="username" className="block mb-1 font-semibold">Username</label>
          <input
            type="text"
            className="form-input w-full"
            id="username"
            placeholder="Enter username"
            onChange={(e) => {
              setValues({
                ...values,
                username: e.target.value
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            className="form-input w-full"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setValues({
                ...values,
                password: e.target.value
              });
            }}
          />
        </div>

        <div className="mb-3">
          <input type="checkbox" className="form-checkbox" id="exampleCheck1" />
          <label className="ml-2" htmlFor="exampleCheck1">Remember me</label>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4 w-full">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
