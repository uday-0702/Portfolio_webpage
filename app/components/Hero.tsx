"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold ">
              Uday Mathur
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl leading-tight">
              Circuit Quantum Electrodynamics (cQED), Quantum Optics, Quantum Devices,
              Quantum Circuits, Superconducting Qubits
            </h2>
            <blockquote className="max-w-2xl mx-auto md:mx-0 leading-relaxed italic border-l-4 border-blue-500 pl-4">
              “If you want to understand quantum physics, visualization is essential. 
              However, if you can explain quantum mechanics solely through visualization, 
              then you haven&apos;t truly understood it yet.”
            </blockquote>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start text-black space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                View Projects
              </button>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1fuXRw197lUg1iyaOzf4ynhl_75tr-Y4l/view?usp=drive_link"
                className="px-8 py-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                Research Statement
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1FAk-36LgZ2KqxTSxmWQfOdsk4-ep7pGG/view?usp=drive_link"
                className="px-8 py-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>
          <div className="relative h-[508px] w-full animate-fadeIn">
            <div className="absolute inset-0  overflow-hidden">
              <Image
                width={1500}
                height={1500}
                src="https://res.cloudinary.com/dplbo6zbr/image/upload/v1737751170/portfolio_folder/v6r5ywrkxap8ndzzkiuh.png"
                alt="Quantum Technology"
                className="w-full h-full object-contain opacity-80 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
