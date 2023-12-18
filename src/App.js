import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import ContactUs from './component/contactus';
import Category from './component/category';
import AboutUs from './component/AboutUs';
import HomePage from './component/HomePage';
import Footer from './component/footer';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      <Navbar/>
      <HomePage/>
      <Category/>
      
       <Routes>
       
      <Route path = {'/about'} element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
