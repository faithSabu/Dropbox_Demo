import './App.css';

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const user = JSON.parse(localStorage.getItem('user'))

  const ProtectecRoutes = ({ children }) => {
    if (!user) return <Navigate to='/login' />
    else return children
  }
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={
          <ProtectecRoutes>
            <Home />
          </ProtectecRoutes>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
