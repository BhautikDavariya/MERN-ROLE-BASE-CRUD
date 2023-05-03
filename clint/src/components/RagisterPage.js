import react, { useState } from 'react'
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reagister } from '../store/actions/ragisterAction';

const RagisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerData, setRagisterData] = useState({
    frist_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const onChnageInput = (e) => {
    e.preventDefault();
    const {name, value} = e.target
    setRagisterData(inputs => ({ ...inputs, [name]: value }))
  }

  const onSave = (e) => {
    e.preventDefault();
    dispatch(reagister(registerData, navigate))
  }

  return (
    <div className="login-form">
    <form>
      <h1>Register</h1>
      <div className="content">
        <div className="input-field">
          <input type="text" placeholder="Frist Name" name='frist_name' onChange={(e) => onChnageInput(e)} />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Last Name" name='last_name' onChange={(e) => onChnageInput(e)} />
        </div>
        <div className="input-field">
          <input type="email" placeholder="Email" name='email' onChange={(e) => onChnageInput(e)} />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" name='password' onChange={(e) => onChnageInput(e)} />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Confirm Password" name='confirm_password' onChange={(e) => onChnageInput(e)} />
        </div>
        {/* <a href="#" className="link">Forgot Your Password?</a> */}
      </div>
      <div className="action">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={(e) => onSave(e)}>Sign UP</button>
      </div>
    </form>
  </div>
  );
}

export default RagisterPage;
