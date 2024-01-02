"use client"
import React from 'react'

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
    </div>
  )
}
