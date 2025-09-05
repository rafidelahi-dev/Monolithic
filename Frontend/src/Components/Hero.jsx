import "../App.css";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataProvider"; // 👈 import context

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);

  const { data } = useContext(DataContext); // 👈 get shared data
  const text = "Monolithic";

  // Get hero images from context
  const images = data?.hero || [];

  // Slideshow effect
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  // Typing effect
  useEffect(() => {
    setVisibleLetters(0);
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 350);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="relative w-screen h-screen overflow-hidden pt-20">
        {images.map((image, index) => (
            <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-80" : "opacity-0"
                }`}
                style={{
                backgroundImage: `url(${image.ImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            ></div>
        ))}
         {/*Overlay content on top of the image*/}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/75 flex items-center justify-start">
                <div className="text-left ml-8">
                    <h1 className="text-white text-8xl font-bold">
                        Welcome to {" "}
                        <span className="shimmer-text text-yellow-400">
                            {text.slice(0, visibleLetters)}
                        </span>
                    </h1>
                    <p className="mt-4 text-white text-3xl">
                        Where <b>Imagination</b> meets <em>Reality</em>
                    </p>
                </div>
            </div>
            
    </div>
  )
}

export default Hero