"use client"
import React,{useEffect} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import '../app/styles/Hero.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className='hero-section'>
      <div className="left-part" data-aos="fade-up" data-aos-duration="1500">
        <h1 >Find, book, rent a car—quick and super easy!</h1>
        <h3 className='sub-text'>Streamline your car rental experience with our effortless booking process.</h3>
        <h3 ><PrimaryButton text="Explore cars" className='explore-car-btn'/></h3>
      </div>
      <div className="right-part">
        <img data-aos="fade-up" data-aos-duration="3000" src="hero.webp" className='hero-img' alt="" />
      </div>
    </div>
    <div style={{textAlign:'center', height:'100px'}}>
      <span className='scroll-down' data-aos="fade-up" data-aos-duration="3000">
      <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100" fill="black"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
      </span>
    </div>
    </>
  
  )
}
