import about from "/assets/About.jpg"
import { FaHome, FaCouch } from "react-icons/fa";
import { HiHomeModern, HiBuildingOffice2 } from "react-icons/hi2";
import "../App.css"
import { useEffect, useState } from "react";


const About = () => {
    const [aboutImage, setAboutImage] = useState([])

    useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbxf1OMYTHlpJLYA8JmXz4YqzMHwwHjA-HWxKAj1AvafqWR_t5hGdFIxK7p9IGi_UFAT-Q/exec")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setAboutImage(data.about)
        })
        .catch((err) => console.error("Error fetching images:", err));
    },[])
  return (
    <section id="about" className="relative w-full h-screen flex items-center justify-center text-white ">
        <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImage[0]?.imageUrl})` }}/>

        <div className="absolute inset-0 bg-black/70"/>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left">
            <h2 className="text-8xl font-bold mb-6 shimmer-text text-yellow-400">About Us</h2>
            <p className="text-2xl lg:text-3xl mb-6 leading-relaxed">
                We believe every space tells a story. With years of experience in
                residential and commercial interior design, we specialize in creating
                spaces that are functional, elegant, and aligned with our clients’
                lifestyles. Our approach blends creativity with practicality to deliver
                timeless designs.
            </p>
            <ul className="mt-8 pt-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-2xl lg:text-3xl ">
                <li className="flex flex-col items-center">
                    <div className="flex">
                        <FaHome className="text-yellow-600 text-6xl mb-4" />
                        <HiBuildingOffice2 className="text-yellow-600 text-6xl mb-4" />
                        </div>
                    <span className="mt-2">Residential & Commercial Projects</span>
                </li>
                <li className="flex flex-col items-center">
                    <FaCouch className="text-yellow-600 text-6xl mb-4" />
                    <span className="mt-2">Tailor-made Furniture & Space Planning</span>
                </li>
                <li className="flex flex-col items-center">
                    <HiHomeModern className="text-yellow-600 text-6xl mb-4" />
                    <span className="mt-2">Sustainable and Modern Design</span>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About