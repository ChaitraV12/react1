
// import './App.css';
import AdminLogin from './Components/AdminLogin';
import Landingpage from './Components/LandingPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UserLogin from './Components/userlogin';
import AdminHome from './Components/AdminHome';
import UserHome from './Components/UserHome';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path='/Admin' element={<AdminLogin />}></Route>
          <Route path='/User' element={<UserLogin />}></Route>
          <Route path='/AdminHome/*' element={<AdminHome/>}></Route>
          <Route path='/UserHome/*' element={<UserHome/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;