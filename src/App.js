import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import ContactUs from './component/contactus';
import Footer from './component/footer';
import Category from './component/category';
function App() {
  return (
    <div >
     <Navbar/>
     <ContactUs/>
     <Footer/>
     <Category/>
    </div>
  );
}

export default App;
