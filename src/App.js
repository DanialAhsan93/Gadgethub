import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Screens/Home/Home';
import Header from './components/Reusable/Navbar/Header';
import Shopall from './components/Screens/ShopAll/Shopall';
import Mobile from './components/Screens/Mobile/Mobile';
import Mobilefeat from './components/Screens/Mobile/Mobilefeat';
import Comp from './components/Screens/Computers/Comp';
import Compfeat from './components/Screens/Computers/Compfeat';
import Tablet from './components/Screens/Tablets/Tablet';
import Tabletfeat from './components/Screens/Tablets/Tabletfeat';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Drones from './components/Screens/Drones&Cameras/Drones';
import Dronesfeat from './components/Screens/Drones&Cameras/Dronesfeat';
import Tv from './components/Screens/TV&HomeCinema/Tv';
import Tvfeat from './components/Screens/TV&HomeCinema/Tvfeat';
import Tech from './components/Screens/WearableTech/Tech';
import Techfeat from './components/Screens/WearableTech/Techfeat';
import Sale from './components/Screens/Sale/Sale';
import Salefeat from './components/Screens/Sale/Salefeat';
import Headphone from './components/Screens/Audio/Headphones/Headphone';
import Headphonefeat from './components/Screens/Audio/Headphones/Headphonefeat';
import Speaker from './components/Screens/Audio/Speakers/Speaker';
import Speakerfeat from './components/Screens/Audio/Speakers/Speakerfeat';

import LogIn from './components/Reusable/Navbar/SignUp/LogIn'
import Favoraties from './components/Reusable/Favoraties/Favoraties';
import Cart from './components/Screens/Cart/Cart';
import Search from './components/Screens/Secreen/Screen';

import SignUp from './components/Reusable/Navbar/Login/SignUp';
import ForgetPassword from './components/Reusable/Navbar/Login/ForgetPassword';
import EnterOtp from './components/Reusable/Navbar/Login/EnterOtp';
import NewPassword from './components/Reusable/Navbar/Login/NewPassword';

function App() {
  return (
    <>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shopall />} />
          <Route path='/mobile' element={<Mobile />} />
          <Route path='/mblfeat' element={<Mobilefeat />} />
          <Route path='/comp' element={<Comp />} />
          <Route path='/compfeat' element={<Compfeat />} />
          <Route path='/tab' element={<Tablet />} />
          <Route path='/tabfeat' element={<Tabletfeat />} />
          <Route path='/drones' element={<Drones />} />
          <Route path='/dronesfeat' element={<Dronesfeat />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/tvfeat' element={<Tvfeat />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/techfeat' element={<Techfeat />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/salefeat' element={<Salefeat />} />
          <Route path='/headph' element={<Headphone />} />
          <Route path='/headphfeat' element={<Headphonefeat />} />
          <Route path='/speaker' element={<Speaker />} />
          <Route path='/speakerfeat' element={<Speakerfeat />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='/enterOtp' element={<EnterOtp />} />
          <Route path='/newPassword' element={<NewPassword />} />
          <Route path='/Favour' element={<Favoraties />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search />} />


        </Routes>



    </>
  );
}

export default App;
