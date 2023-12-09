import Badge from 'react-bootstrap/Badge';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './assets/images/doggy.png';

const App = () => {
  return (
    <div>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', paddingTop: '50px',backgroundColor: '#222222', height: '50vh' }}>
        <div style={{ flex: 1 }}>
         
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '20px' }}>About BlissBloom</h6>
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>BlissBloom is a digital oasis dedicated to cultivating joy and inspiration in every facet of life. Our blog is a sanctuary where mindfulness meets everyday magic, exploring wellness, creativity, and the beauty found in the simple moments. Dive into a tapestry of articles that celebrate mindful living and the pursuit of a vibrant, fulfilling existence. Join our community, where we embrace the present, nurture passions, and discover the extraordinary in the ordinary. At BlissBloom, we invite you to bloom into your most radiant self, finding joy in the journey every day.</h6>

        </div>

        <div style={{ flex: 1 }}>
          
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '20px' }}>Navigations</h6>
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Home</h6>
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Blog</h6>
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Categories</h6>
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Single Post</h6>
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>About Us</h6>
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Contact</h6>



        </div>
        <div style={{ flex: 1 }}>
          
        <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '20px' }}>Categories</h6>
        <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Business</h6>
        <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Sports</h6>
        <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Foods</h6>
        <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Politics</h6>
        <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white',fontSize: '15px' }}>Celebrity</h6>



        </div>

        <div style={{ display:'flex' , justifyContent:'center' }}>
        
          <h6 style={{ fontFamily: 'EB Garamond, serif',color: 'white' , fontSize: '20px' }}>Recent Posts</h6>
          <img src={Image} alt=''/>
        </div>
        
      </div>
      <div style={{backgroundColor : 'black'}}>
          <p><i class="bi bi-c-circle"></i></p>
        </div>
    </div>
  );
};

export default App;
