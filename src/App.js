
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Cheackout from './components/Cheackout/Cheackout';
import GoogleLogin from './components/GoogleLogin/GoogleLogin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ServiceDetels from './components/ServiceDetels/ServiceDetels';
import ServicesItam from './components/ServicesItam/ServicesItam';
import UploadProduct from './components/UploadProduct/UploadProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        
        <Route path='/servicesitam' element={<ServicesItam></ServicesItam>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='register'element={<Register></Register>}></Route>
        <Route path='googlelogin' element={<GoogleLogin></GoogleLogin>}></Route>
        <Route path='cheackout' element={<Cheackout></Cheackout>}></Route>

        <Route path='service/:serviceId' element={
        <RequireAuth>
          <ServiceDetels></ServiceDetels>
        </RequireAuth>
        }></Route>

        <Route path='manageproduct' element={
        <RequireAuth>
          <ManageProduct></ManageProduct>
        </RequireAuth>
        }></Route>

        <Route path='/uploadproduct' element={
          <RequireAuth>
            <UploadProduct></UploadProduct>
          </RequireAuth>
        }></Route>
        
      </Routes>
    </div>
  );
}

export default App;
