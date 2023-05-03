import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RagisterPage from './components/RagisterPage';
import UserList from './components/UserList';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const token = localStorage.getItem("authToken")

  return (
    <div className="App">
        <ToastContainer />
      <Routes>
      <Route path='/' element={<Navigate replace to={token ? "/user" : "/login"} />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RagisterPage />} />
      <Route path='/user' element={<UserList />} />
      <Route path='*' element={<Navigate replace to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
