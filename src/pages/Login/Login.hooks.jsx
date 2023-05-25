import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, userLogin } from '../../components/store/reducers/Login';

const useLogin = () => {
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
        navigate('/');
        dispatch(userLogin({ username, password }));
        } else {
        alert('Login failed');
        }
    };
    return { values, setValues, handleSubmit }
}

export default useLogin