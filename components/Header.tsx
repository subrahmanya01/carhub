"use client"
import React from 'react'
import "../app/styles/Header.css";
import { DefaultButton } from '@fluentui/react/lib/Button';

export default function Header() {
  return (
    <div className='header-component'>
        <img src="https://carhub-two.vercel.app/logo.svg" className='header-image' alt="" />
        <h3 className='app-name'>Car Showcase</h3>
        <nav>
            <ul className='nav-list'>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Contact us</li>
                <li>About us</li>
            </ul>
        </nav>
        <DefaultButton text="Login" style={{position:'absolute', right:'20px'}} />
    </div>
  )
}
