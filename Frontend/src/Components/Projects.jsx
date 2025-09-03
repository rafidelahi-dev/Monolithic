import React, { useState } from 'react';

const Projects = () => {
  // Sample project data - replace with actual project images and details
  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Residential",
      image: "../assets/After_Annan.jpg",
      description: "Contemporary living space with minimalist design and natural lighting"
    },
    {
      id: 2,
      title: "Executive Office",
      category: "Commercial",
      image: "../assets/After corridor.jpg",
      description: "Professional workspace designed for productivity and comfort"
    },
    {
      id: 3,
      title: "Luxury Bedroom Suite",
      category: "Residential",
      image: "../assets/After master.jpg",
      description: "Elegant bedroom with custom furniture and ambient lighting"
    },
    {
      id: 4,
      title: "Restaurant Interior",
      category: "Commercial",
      image: "../assets/After Annan.jpg",
      description: "Warm and inviting dining atmosphere with custom seating"
    },
    {
      id: 5,
      title: "Kitchen Renovation",
      category: "Residential",
      image: "../assets/After Annan.jpg",
      description: "Modern kitchen with sustainable materials and smart storage"
    },
    {
      id: 6,
      title: "Boutique Store",
      category: "Commercial",
      image: "../assets/After Annan.jpg",
      description: "Retail space optimized for customer experience and product display"
    }
  ];

  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['All', 'Residential', 'Commercial'];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover our portfolio of stunning interior designs that transform spaces 
            into beautiful, functional environments tailored to our clients' unique needs.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                    console.log(e);
                  }
                }
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'Residential' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm px-4">{project.description}</p>
                    <button className="mt-4 px-6 py-2 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info (always visible) */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;