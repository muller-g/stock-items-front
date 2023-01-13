import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './Auth';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import UserRegister from './pages/user_register/UserRegister';

function App() {

  const Private = ({ children }) => {
    const { token } = useContext(AuthContext)

    if (!token) {
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
      <div className="App">
        <Routes>
            <Route path="/" element={<Private><Home /></Private>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/user-register" element={<UserRegister />}></Route>
          </Routes>
          <ToastContainer />
      </div>
  );
}

export default App;
