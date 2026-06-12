"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function Technology() {

  const obj = [
    {
      id: 1,
      bio: "THE TERMINOLOGY...",
      name: "LAUNCH VEHICLE",
      decrip: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: "vehicle.jpg",
    },
    {
      id: 2,
      bio: "THE TERMINOLOGY...",
      name: "SPACEPORT",
      decrip: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      img: "spaceport.jpg",
    },
    {
      id: 3,
      bio: "THE TERMINOLOGY...",
      name: "SPACE CAPSULE",
      decrip: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: "capsule.jpg",
    },
  ]

  const [selectedSpace, setSelectedSpace] = useState(obj[0]);

  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: "url('/tech.jpg')" }}
    >
      <Navbar />
      <h1 className="text-lg md:text-xl lg:text-2xl uppercase tracking-widest text-white mt-8 md:mt-12 lg:mt-15 ml-6 md:ml-12 lg:ml-65">
        <span className="text-[#4F596A] font-extrabold">03&nbsp;&nbsp;</span>Space Launch 101
      </h1>

      <div className="flex flex-col lg:flex-row items-center pt-8 justify-center gap-10 md:gap-16 lg:gap-20 px-6 md:px-10 lg:ml-25">
        <div className="order-2 lg:order-1 flex lg:flex-col gap-4 md:gap-6 lg:gap-10">
          {obj.map((space) => (
            <button
              key={space.id}
              onClick={() => setSelectedSpace(space)}
              className={`w-14 h-14 md:w-18 md:h-18 lg:w-21 lg:h-21 flex items-center cursor-pointer justify-center border rounded-full text-xl md:text-2xl lg:text-3xl font-serif ${selectedSpace.id === space.id
                  ? "bg-white text-[#0B0E18]"
                  : "bg-transparent hover:bg-white/10"
                }`}
            >
              {space.id}
            </button>
          ))}
        </div>
        <div className="order-3 lg:order-2 space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="text-gray-400 font-serif text-lg md:text-2xl lg:text-3xl">{selectedSpace.bio}</h2>
          <h1 className="text-[#f3f3f3] font-serif text-3xl md:text-5xl lg:text-6xl">{selectedSpace.name}</h1>
          <p className="text-[#b4b4b4] text-base md:text-lg max-w-full lg:max-w-142 mt-4 md:mt-8 lg:mt-11 mx-auto lg:mx-0">{selectedSpace.decrip}</p>
        </div>
        <img
          src={selectedSpace.img}
          alt={selectedSpace.img}
          className="order-1 lg:order-3 rounded-md"
        />
      </div>

    </div>
  );
}

export default Technology;
