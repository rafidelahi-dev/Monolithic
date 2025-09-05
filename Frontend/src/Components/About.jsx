import { FaHome, FaCouch } from "react-icons/fa";
import { HiHomeModern, HiBuildingOffice2 } from "react-icons/hi2";
import "../App.css";
import { useContext } from "react";
import { DataContext } from "./DataProvider";

const About = () => {
  const { data} = useContext(DataContext);



  const aboutImage = data.about; 


  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center text-white py-12">
        <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImage[0]?.imageUrl})` }}/>

        <div className="absolute inset-0 bg-black/70"/>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 shimmer-text text-yellow-400">About Us</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed">
                We believe every space tells a story. With years of experience in
                residential and commercial interior design, we specialize in creating
                spaces that are functional, elegant, and aligned with our clients'
                lifestyles. Our approach blends creativity with practicality to deliver
                timeless designs.
            </p>
            <ul className="mt-8 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
                <li className="flex flex-col items-center px-4">
                    <div className="flex gap-2">
                        <FaHome className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" />
                        <HiBuildingOffice2 className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" />
                    </div>
                    <span className="mt-2">Residential & Commercial Projects</span>
                </li>
                <li className="flex flex-col items-center px-4">
                    <FaCouch className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" />
                    <span className="mt-2">Tailor-made Furniture & Space Planning</span>
                </li>
                <li className="flex flex-col items-center px-4 sm:col-span-2 lg:col-span-1">
                    <HiHomeModern className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" />
                    <span className="mt-2">Sustainable and Modern Design</span>
                </li>
            </ul>
        </div>
    </section>
)}

export default About