import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

const Founder = () => {
  const { data, loading } = useContext(DataContext);
  const [isHovered, setIsHovered] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (!data || !data.founder || data.founder.length === 0) {
    return <p>No founder data available</p>;
  }

  const founder = data.founder[0]; // get first founder row

  // Sample founder data - replace with your uncle's actual information
  const founderData = {
    name: "Iftekhar Uddin Shovon",
    title: "Principal Interior Designer & Founder",
    image: "/assets/Founder.jpg", // Add your uncle's professional photo
    experience: "10+ Years",
    projectsCompleted: "200+",
    certifications: ["Certified Interior Designer", "Sustainable Design Specialist"],
    philosophy: "I believe that great design isn't just about making spaces beautiful—it's about creating environments that enhance the way people live, work, and connect.",
    story: "My journey in interior design began over 15 years ago with a simple belief: every space has the potential to tell a story. What started as a passion for transforming homes has evolved into a comprehensive design practice that serves both residential and commercial clients.",
    expertise: [
      "Residential Interior Design",
      "Commercial Space Planning",
      "Sustainable Design Solutions",
      "Custom Furniture Design",
      "Project Management",
      "3D Visualization"
    ],
    values: [
      {
        title: "Client-Centered Approach",
        description: "Every project begins with understanding your unique needs, lifestyle, and vision."
      },
      {
        title: "Sustainable Design",
        description: "Committed to eco-friendly materials and practices that benefit both clients and the environment."
      },
      {
        title: "Timeless Elegance",
        description: "Creating designs that stand the test of time while incorporating contemporary functionality."
      }
    ]
  };

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
                  e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
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
              <h4 className="text-lg font-bold text-gray-800 mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {founderData.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Areas of Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {founderData.expertise.map((skill, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founderData.values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Founder;