import { useState } from 'react'
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/loginAction';
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const onChnageInput = (e) => {
    e.preventDefault();
    const {name, value} = e.target
    setLoginData(inputs => ({ ...inputs, [name]: value }))
  }

  const onSave = (e) => {
    e.preventDefault();
    dispatch(login(loginData, navigate))
  }

  return (
    <div className="login-form">
      <form>
        <h1>Login</h1>
        <div className="content">
        <div className="input-field">
          <input type="email" placeholder="Email" name='email' onChange={(e) => onChnageInput(e)} />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" name='password' onChange={(e) => onChnageInput(e)} />
        </div>
          {/* <a href="#" className="link">Forgot Your Password?</a> */}
        </div>
        <div className="action">
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={(e) => onSave(e)}>Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
