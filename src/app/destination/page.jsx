"use client"
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function Destination() {

  const obj = [
    {
      id: 1,
      img: "/moon.png",
      heading: "MOON",
      paragraph: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 KM",
      est: "3 DAYS",
    },
    {
      id: 2,
      img: "/mars.png",
      heading: "MARS",
      paragraph: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "225 MIL. KM",
      est: "9 MONTHS",
    },
    {
      id: 3,
      img: "/europa.png",
      heading: "EUROPA",
      paragraph: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 MIL. KM",
      est: "3 YEARS",
    },
    {
      id: 4,
      img: "/titan.webp",
      heading: "TITAN",
      paragraph: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDistance: "1.6 bIL. KM",
      est: "7 YEARS",
    }
  ]

  const [selectedPlanet, setSelectedPlanet] = useState(obj[0]);

  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: "url('/destination.jpg')" }}
    >
      <Navbar />
      <h1 className="text-lg md:text-xl lg:text-2xl uppercase tracking-widest text-white mt-8 md:mt-12 lg:mt-15 ml-6 md:ml-12 lg:ml-65">
        <span className="text-[#4F596A] font-extrabold">01&nbsp;&nbsp;</span>pick your destination
      </h1>

      <div className="flex flex-col lg:flex-row pb-5 items-center justify-center gap-12 md:gap-20 lg:gap-40 mt-10 md:mt-16 lg:mt-20 px-6 md:px-10">
        <img
          src={selectedPlanet.img}
          alt={selectedPlanet.heading}
          className="w-48 h-48 md:w-80 md:h-80 lg:w-135 lg:h-135 object-contain"
        />

        <div className="text-center lg:text-left">
          {/* Links */}
          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 lg:gap-10 uppercase tracking-widest mb-8">
            {obj.map((planet) => (
              <button
                key={planet.id}
                onClick={() => setSelectedPlanet(planet)}
                className={`pb-2 border-b-2 cursor-pointer transition-all hover:border-gray-400 ${selectedPlanet.id === planet.id
                    ? "border-white"
                    : "border-transparent"
                  }`}
              >
                {planet.heading}
              </button>
            ))}
          </div>

          <h3 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif">
            {selectedPlanet.heading}
          </h3>

          <p className="text-[#D0D6F9] max-w-full lg:max-w-125 mt-6 mx-auto lg:mx-0">
            {selectedPlanet.paragraph}
          </p>

          <hr className="my-10 border-gray-600" />


          <div className="flex flex-col md:flex-row items-center lg:items-start gap-8 md:gap-16 lg:gap-20 mt-10">
            <div>
              <p className="text-sm tracking-widest text-[#D0D6F9]">AVG. DISTANCE</p>
              <h2 className="text-2xl md:text-3xl pt-1 text-white">{selectedPlanet.avgDistance}</h2>
            </div>

            <div>
              <p className="text-sm tracking-widest text-[#D0D6F9]">EST. TRAVEL TIME</p>
              <h2 className="text-2xl md:text-3xl pt-1 text-white">{selectedPlanet.est}</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Destination;
