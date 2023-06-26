import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import {FaFacebook, FaTwitter, FaInstagram,FaBars,FaTimes} from 'react-icons/fa'
import  {Card, Carousel} from 'react-bootstrap';
import { useState } from 'react';

const ImagesSlide = () => {
  const [slide,setslide]=useState(0);
  
  const handleSelect = (selectedSlide)=>{
    setslide(selectedSlide)
  }
  return(
   <Carousel activeIndex={slide} onSelect={handleSelect}>
   <Carousel.Item>
    <img src='https://images.unsplash.com/photo-1668029475364-0c2a5f3096f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' 
    className="d-block w-10" width='600px' height='400px'></img>
   </Carousel.Item>
<Carousel.Item>
   <img src='https://images.unsplash.com/photo-1668113398367-653e75442040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' 
   className="d-block w-10" width='600px' height='400px'></img>
   </Carousel.Item>
<Carousel.Item>
    <img src='https://images.unsplash.com/photo-1667737540390-b3d5ee3c42a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' 
    className="d-block w-10" width='600px' height='400px'></img>
   </Carousel.Item>
<Carousel.Item>
    <img src='https://images.unsplash.com/photo-1686135161698-4c14ef460a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' 
    className="d-block w-10" width='600px' height='400px'></img>
   </Carousel.Item>
   <Carousel.Item>
   <img src='https://images.unsplash.com/photo-1607267755403-0a0191b84918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80' 
   className="d-block w-10" width="600px" height='400px'></img>
   </Carousel.Item>
   </Carousel>
  )
}

const Section = () =>{
  return (
    <main className="home">
    <h1>WONDERFUL <br/>ISLAND.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br/>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat<br/> nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br/> officia deserunt mollit anim id est laborum.</p>
   <button> <a>Read More</a></button>
   <div className="social-icons">
    <a><FaFacebook/></a>
    <a><FaTwitter/></a>
    <a><FaInstagram/></a>
   </div>
      </main>
  )
}

const Navbar = () => {
  const navRef = useRef();
 
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
   <header className="container">
      <h3>CostaTravels</h3>
     <nav ref={navRef} className="navbar">
       <a href="#">Home</a>      
        <a href="#">About</a>       
        <a href="#">Explore</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
   <button onClick={showNavbar} className="nav-btn nav-btn-close"><FaTimes/></button>
   </nav>
    <button onClick={showNavbar} className="nav-btn"><FaBars/></button>   
   </header>
    )
}

function App() {
  return (                                              
    
    <div>
    <Navbar />
    <Section />
    <div className='image-slider'>
  
    <ImagesSlide/>
    </div>
      </div>
      
      
    )
}

export default App;
