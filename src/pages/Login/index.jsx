import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, userLogin } from '../../components/store/reducers/Login'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const account = {
        username: 'admin@bukapedia.com',
        password: 'admin123'
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const username = values.username
        const password = values.password
        if (username === account.username && password === account.password) {
            navigate('/admin')
            dispatch(login({
                admin: true,
                username: username,
                password: password
            }))
        } else if (username, password) {
            dispatch(userLogin({ username, password }))
            navigate('/')
        } else {
            alert('Login failed')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={(e) => {
                setValues({
                    ...values,
                    username: e.target.value
                })
            }}/>
            <small id="username" className="form-text text-muted">We'll never share your username with anyone else.</small>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => {
                setValues({
                    ...values,
                    password: e.target.value
                })
            }}/>
        </div>

        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
            <button type="submit" className="rounded bg-blue-500" >Submit</button>
    </form>
  )
}

export default Login