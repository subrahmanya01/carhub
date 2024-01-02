"use client"
import React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import '../app/styles/Hero.css'

export default function Hero() {
  return (
    <div className='hero-section'>
      <div className="left-part">
        <h1>Find, book, rent a car—quick and super easy!</h1>
        <h3 className='sub-text'>Streamline your car rental experience with our effortless booking process.</h3>
        <h3 ><PrimaryButton text="Explore cars" className='explore-car-btn'/></h3>
      </div>
      <div className="right-part">
        <img src="hero.webp" className='hero-img' alt="" />
      </div>
    </div>
  
  )
}
