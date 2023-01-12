import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
      <div className="App">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <ToastContainer />
      </div>
  );
}

export default App;
