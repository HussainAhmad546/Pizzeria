import './App.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen.js';
import AboutScreen from './screens/AboutScreen.js';
import ContactScreen from './screens/ContactScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import Footer from './components/Footer.js';
import AdminScreen from './screens/AdminScreen.js';


function App() {
  return (
    <div>
       <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='about' element={<AboutScreen />}/>
        <Route path='contact' element={<ContactScreen />}/>
        <Route path='register' element={<RegisterScreen />}/>
        <Route path='login' element={<LoginScreen />}/>
        <Route path='admin' element={<AdminScreen/>}/>
      </Routes>
      <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
