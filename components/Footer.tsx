"use client";
import React from "react";
import "../app/styles/Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <div className="footer-section">
      <div className="first-block">
        <img
          src="image.webp"
          className="app-icon"
          alt="app-icon"
        />
        <h4>Carhub 2023</h4>
        <h4>All Rights Reserved © </h4>
      </div>
      <div className="second-block">
        <h3>About</h3>
        <h4><Link href="/">How it works</Link></h4>
        <h4><Link href="/">Featured</Link></h4>
        <h4><Link href="/">Partnership</Link></h4>
        <h4><Link href="/">Bussiness Relation</Link></h4>
      </div>
      <div className="third-block">
        <h3>Company</h3>
        <h4><Link href="/">Event</Link></h4>
        <h4><Link href="/">Blog</Link></h4>
        <h4><Link href="/">Podcast</Link></h4>
        <h4><Link href="/">Invite a friend</Link></h4>
      </div>
      <div className="fourth-block">
      <h3>Socials</h3>
       <h4><Link href="/">Discord</Link></h4>
        <h4><Link href="/">Instagram</Link></h4>
        <h4><Link href="/">Twitter</Link></h4>
        <h4><Link href="/">Facebook</Link></h4>
      </div>
      <div className="footer-line">
      <h4>@2024 CarHub. All rights reserved</h4>
      <h4><Link href="/">Privacy & Policy</Link></h4>
      <h4><Link href="/">Terms & Condition</Link></h4>
    </div>
    </div>
    </>
  );
}
