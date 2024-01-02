import React from "react";
import "../app/styles/AppDescription.css";

export default function AppDescription() {
  return (
    <div className="">
        
      <div className="blocks">
        <div className="block">
          <h1>
            <img src="localtaxi.svg" className="decription-icon" alt="" />
            Discover Your Perfect Ride</h1>

          <p>
            Whether you're planning a road trip, a weekend getaway, or just need
            a stylish ride for your daily commute, CarHub has got you covered.
            Browse through our extensive fleet of vehicles, from fuel-efficient
            compacts to luxurious SUVs, and find the perfect car that suits your
            needs and style.
          </p>
        </div>

        <div className="block">
          <h1>Effortless Booking</h1>

          <p>
          Booking a car has never been this easy! With CarHub, you can seamlessly reserve your desired vehicle with just a few taps. Our user-friendly interface allows you to select the pickup and drop-off locations,
           choose your preferred dates, and even customize your rental options. Your dream car is just a click away!
          </p>
        </div>

        <div className="block">
          <h1>Top-Notch Rentals, Hassle-Free Experience:</h1>

          <p>
          Experience the convenience of hassle-free rentals with CarHub. Our commitment to quality ensures that every vehicle in our fleet is well-maintained and ready to hit the road. 
          Enjoy a smooth and reliable ride with the assurance of safety and comfort.
          </p>
        </div>
      </div>
     
    </div>
  );
}
