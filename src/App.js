import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Appo from './Pages/Dashbord/Appo';
import Dashbord from './Pages/Dashbord/Dashbord';
import Navbar from './Pages/Home/Navbar';
import User from './Pages/Dashbord/User';
import { privetRoute } from './Pages/Route/PrivetRoute';
import publicRoute from './Pages/Route/PublicRoute';
import Footer from './Pages/Shared/Footer';
import RequireAuth from './Pages/Shared/RequireAuth';
import AddDoctor from './Pages/Dashbord/AddDoctor';
import ManagDoctor from './Pages/Dashbord/ManagDoctor';


function App() {

  return (
    <div className='ml-5 mr-5'>
      <Navbar></Navbar>
      <Routes>
        {
          publicRoute.map((route , index) =>(
            <Route key={index} path={route.path} element={<route.Componemt />}></Route>
          )
          )
        }
        {
          privetRoute.map((route , index) =>(
            <Route key={index} path={route.path} element={
              <RequireAuth>
                <route.Component></route.Component>
              </RequireAuth>
            }></Route>
          ))
        }
        <Route path='Dashbord' element={<Dashbord></Dashbord>}>
          <Route path="Appo" element={<Appo></Appo>}></Route>
          <Route path="User" element={<User></User>}></Route>
          <Route path="AddDoctor" element={<AddDoctor></AddDoctor>}></Route>
          <Route path="manageDoctor" element={<ManagDoctor></ManagDoctor>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
