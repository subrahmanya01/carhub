"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../app/styles/AppDescription.css";

export default function AppDescription() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <div className="blocks">
        <div className="block" data-aos="fade-up" data-aos-duration="3000">
          <h1>🚗 Discover Your Perfect Ride</h1>

          <p>
            Whether you're planning a road trip, a weekend getaway, or just need
            a stylish ride for your daily commute, CarHub has got you covered.
            Browse through our extensive fleet of vehicles, from fuel-efficient
            compacts to luxurious SUVs, and find the perfect car that suits your
            needs and style.
          </p>
        </div>

        <div className="block" data-aos="fade-up" data-aos-duration="3000">
          <h1>📅Effortless Booking</h1>

          <p>
            Booking a car has never been this easy! With CarHub, you can
            seamlessly reserve your desired vehicle with just a few taps. Our
            user-friendly interface allows you to select the pickup and drop-off
            locations, choose your preferred dates, and even customize your
            rental options. Your dream car is just a click away!
          </p>
        </div>

        <div className="block" data-aos="fade-up" data-aos-duration="3000">
          <h1>🌟Top-Notch Rentals, Hassle-Free Experience</h1>

          <p>
            Experience the convenience of hassle-free rentals with CarHub. Our
            commitment to quality ensures that every vehicle in our fleet is
            well-maintained and ready to hit the road. Enjoy a smooth and
            reliable ride with the assurance of safety and comfort.
          </p>
        </div>

        <div className="block" data-aos="fade-up" data-aos-duration="3000">
          <h1>📍 Locate and Go</h1>

          <p>
            With our built-in map feature, easily locate the nearest CarHub
            partner location for quick and convenient pickups. No more wasting
            time – get on the road faster and make the most of your journey.
          </p>
        </div>

        <div className="block" data-aos="fade-up" data-aos-duration="3000">
          <h1>📱 Manage Your Bookings On-the-Go</h1>

          <p>
          Download the CarHub app and have the power to manage your bookings anytime, anywhere. Need to extend your rental or change the pickup location? No problem! Our app puts you in control, ensuring a stress-free and flexible experience.
          </p>
        </div>

        <div className="block" data-aos="fade-up" data-aos-duration="3000">
          <h1>🔒 Secure and Transparent Transactions</h1>

          <p>
          Your peace of mind is our priority. CarHub guarantees secure and transparent transactions, so you can enjoy your rental without any worries. Our payment system is straightforward, and there are no hidden fees – just a straightforward and fair pricing structure.
          </p>
        </div>
      </div>
    </div>
  );
}
