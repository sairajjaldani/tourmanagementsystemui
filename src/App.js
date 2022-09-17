
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/admin/Home';
import { Route} from 'react-router-dom';
import {BrowserRouter,Routes} from 'react-router-dom';
import './index.css';
import Login from './components/Login';
import ReservedTours from './components/ReservedTours';
import Register from './components/Register';
import TourPackages from './components/TourPackages';
import Customers from './components/Customers';
import CustomerHome from './components/customer/CustomerHome';
import CustomerReservedTours from './components/customer/CustomerReservedTours';
import CustomerTourPackages from './components/customer/CustomerTourPackages';
import MyCustomerProfile from './components/customer/MyCustomerProfile';
import SignOut from './components/SignOut';
import AdminLogin from './components/admin/AdminLogin';
import Booking from "./components/customer/Booking";
import AddPackages from './components/admin/AddPackages';

import TourBookingSuccess from './components/TourBookingSuccess';

const App=()=>{
    return (
      <div>
        <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Login />} />
          <Route path='/success' element={<TourBookingSuccess/>}/>
          <Route path='/Booking' element={<Booking />} />
          <Route path='/AddPackages' element={<AddPackages/>}/>
          <Route path='/AdminLogin' element={<AdminLogin/>} />
          <Route path='/SignOut' element={<SignOut />}/>
          <Route path='/Home' element={<Home />} />
          <Route path='/Customers' element={<Customers />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/ReservedTours' element={<ReservedTours />} />
          <Route path='/TourPackages' element={<TourPackages />} />
          <Route path='/CustomerHome' element={<CustomerHome />} />
          <Route path='/CustomerReservedTours' element={<CustomerReservedTours />} />
          <Route path='/CustomerTourPackages' element={<CustomerTourPackages />} />
          <Route path='/MyCustomerProfile' element={<MyCustomerProfile />}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
  
  

export default App;
