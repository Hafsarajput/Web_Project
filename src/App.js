import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import ContactUs from './component/contactus';
import Footer from './component/footer';
import Category from './component/category';
import AboutUs from './component/AboutUs';
function App() {
  return (
    <div >
      <Navbar />
      <ContactUs />
      <Footer />
      <Category />
      <AboutUs />
    </div>
  );
}

export default App;
