import { useContext, useState } from "react";
import { DataContext } from "../Components/DataProvider";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const FounderPage = () => {
  const { data, loading } = useContext(DataContext);
  const [isHovered, setIsHovered] = useState(false);
  const founder = data.founder[0]; // get first founder row

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Visionary</h1>
            <p className="text-xl md:text-2xl text-yellow-300 mb-8">The Creative Force Behind Our Design Excellence</p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
            
            <div className="flex justify-center space-x-4">
              <a href="#founder-details" className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                Explore Journey
              </a>
              <a href="#values" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Core Values
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Details */}
      <section id="founder-details" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Column */}
            <div className="w-full lg:w-2/5 relative">
              <div 
                className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={founder.imageurl}
                  alt={founder.name}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* Hover Overlay with Quote */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="p-8 text-white">
                    <blockquote className="text-xl italic font-light">
                      "{founder.philosophy}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">{`${founder.experience}+`}</div>
                  <div className="text-gray-700 font-medium">Years of Experience</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">{`${founder.projects_completed}+`}</div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-3/5">
              <div className="mb-8">
                <span className="text-yellow-600 font-semibold">Founder & Principal Designer</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">{founder.name}</h2>
                <p className="text-xl text-gray-600">{founder.title}</p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-yellow-500">
                  My Journey
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {founder.my_story}
                </p>
              </div>

              {/* Philosophy Quote */}
              <div className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500 shadow-sm mb-10">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Design Philosophy</h4>
                <blockquote className="text-gray-700 italic text-lg">
                  "{founder.design_philosophy}"
                </blockquote>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Certifications & Education</h4>
                <div className="flex flex-wrap gap-3">
                  {(founder.certifications ? founder.certifications.split(",") : []).map((cert, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm"
                    >
                        {cert.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
            <p className="text-gray-600 text-lg">Specialized skills that bring unique value to every project</p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(founder.expertise ? founder.expertise.split(",") : []).map((skill,index) => (
                <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-yellow-300"
                >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="text-xl font-semibold text-gray-800 group-hover:text-yellow-700 transition-colors duration-300">
                    {skill.trim()}
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-gray-600 text-lg">The guiding principles that shape our design approach</p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(founder.values ? JSON.parse(founder.values) : []).map((value, index) => (
                <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                      {value.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    {value.description}
                </p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let's collaborate to create something extraordinary together. Our founder-led approach ensures personal attention to every project.
          </p>
          <Link to='/contact' 
            className="inline-block px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default FounderPage;