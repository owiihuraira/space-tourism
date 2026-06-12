"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function Crew() {

  const obj = [
    {
      id: 1,
      title: "COMMANDER",
      name: "DOUGLAS HURLEY",
      para: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: "/hurley.png",
    },
    {
      id: 2,
      title: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      para: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: "/mark.webp",
    },
    {
      id: 3,
      title: "PILOT",
      name: "VICTOR GLOVER",
      para: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      img: "/victor.webp",
    },
    {
      id: 4,
      title: "FLIGHT ENGNEER",
      name: "ANOUSHEH ANSARI",
      para: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      img: "/ansari.png",
    }
  ]

  const [selectedPerson, setSelectedPerson] = useState(obj[0])

  return (
    <div
      className="min-h-screen bg-cover bg-center py-2"
      style={{ backgroundImage: "url('/crew.jpg')" }}
    >
      <Navbar />
      <h1 className="text-lg md:text-xl lg:text-2xl uppercase tracking-widest text-white mt-8 md:mt-10 lg:mt-13 ml-6 md:ml-12 lg:ml-65">
        <span className="text-[#4F596A] font-extrabold">02&nbsp;&nbsp;</span>Meet Your Crew
      </h1>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start ml-0 lg:ml-65 gap-8 md:gap-16 lg:gap-40 px-6 md:px-10">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-7 pt-8 md:pt-12 lg:pt-20 justify-center text-center lg:text-left">
          <h3 className="text-gray-400 font-serif text-xl md:text-2xl lg:text-3xl">
            {selectedPerson.title}
          </h3>

          <h1 className="text-[#f3f3f3] font-serif text-4xl md:text-5xl lg:text-6xl">
            {selectedPerson.name}
          </h1>

          <p className="text-[#b4b4b4] text-base md:text-lg max-w-full lg:max-w-150 mt-3 md:mt-5 mx-auto lg:mx-0">
            {selectedPerson.para}
          </p>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-6 lg:gap-7 mt-8 md:mt-16 lg:mt-45">
            {obj.map((person) => (
              <button
                key={person.id}
                onClick={() => setSelectedPerson(person)}
                className={`w-4 h-4 cursor-pointer rounded-full transition-all ${selectedPerson.id === person.id
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>
        <img
          src={selectedPerson.img}
          alt={selectedPerson.name}
          className="w-64 h-80 md:w-96 md:h-125 lg:w-147.25 pt-8 lg:h-170 object-contain"
        />
      </div>
    </div>

  );
}

export default Crew;
