import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

const Founder = () => {
  const { data, loading } = useContext(DataContext);
  const [isHovered, setIsHovered] = useState(false);

  const founder = data.founder[0]; // get first founder row

  return (
    <section id="founder" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-6">
            Meet the Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the vision and expertise behind our award-winning interior designs
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image & Stats */}
          <div className="relative">
            {/* Founder Image */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={founder.imageurl}
                alt={founder.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://res.cloudinary.com/drptebzjv/image/upload/v1757034989/Founder_ad62aj.jpg"}}
              />
              
              {/* Hover Overlay with Quote */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <blockquote className="text-lg italic font-light">
                    "{founder.philosophy}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{`${founder.experience}+`}</div>
                <div className="text-gray-600 font-medium">Experience</div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{`${founder.projects_completed}+`}</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Name & Title */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {founder.name}
              </h3>
              <p className="text-xl text-yellow-600 font-medium mb-6">
                {founder.title}
              </p>
            </div>

            {/* Story */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">My Story</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {founder.my_story}
              </p>
            </div>

            {/* Philosophy Quote */}
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-600">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Design Philosophy</h4>
              <blockquote className="text-gray-600 italic">
                "{founder.design_philosophy}"
              </blockquote>
            </div>

            {/* Certifications */}
            <div>
              <Link
              to="/founder"
              className="inline-block mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-700 transition-colors duration-300"
            >
              Learn More About Me
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;