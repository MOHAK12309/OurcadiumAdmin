import logo from './logo.svg';
import './App.css';
import Admin from './component/admin';
import AdminLogin from './component/adminLogin';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <Routes>
    <Route path='/' element={<Admin/>}></Route>
    <Route path='login' element={<AdminLogin/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
