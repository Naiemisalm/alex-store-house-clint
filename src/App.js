
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SelectItam from './components/SelectItam/SelectItam';
import ServicesItam from './components/ServicesItam/ServicesItam';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/servicesitam' element={<ServicesItam></ServicesItam>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='register'element={<Register></Register>}></Route>
        <Route path='/selectitam' element={<SelectItam></SelectItam>}></Route>
      </Routes>
    </div>
  );
}

export default App;
