import React, { useState } from 'react';
import {Link} from 'react-router-dom'


const Contact = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  // Contact information - replace with actual details
  const contactInfo = {
    phone: "+8801770222244",
    email: "info@interiordesign.com",
    whatsapp: "+8801770222244", // Without + and spaces for WhatsApp URL
    address: "Kampung Baru Balakong, Selangor, Malaysia",
    businessHours: {
      weekdays: "9:00 AM - 6:00 PM",
      weekend: "10:00 AM - 4:00 PM"
    },
    socialMedia: {
      instagram: "https://instagram.com/yourdesignstudio",
      facebook: "https://www.facebook.com/iftekhar.shovon"
    }
  };

  const contactMethods = [
    {
      id: 1,
      title: "WhatsApp Chat",
      subtitle: "Quick Response",
      icon: "whatsapp",
      description: "Get instant replies and share your design ideas directly",
      action: "Chat Now",
      link: `https://wa.me/${contactInfo.whatsapp}?text=Hello%20I%20am%20interested%20in%20your%20interior%20design%20services`,
      color: "green"
    },
    {
      id: 2,
      title: "Phone Call",
      subtitle: "Direct Consultation",
      icon: "phone",
      description: "Speak directly with our design team",
      action: "Call Now",
      link: `tel:${contactInfo.phone}`,
      color: "blue"
    },
    {
      id: 3,
      title: "Email Us",
      subtitle: "Detailed Inquiries",
      icon: "email",
      description: "Send us your project details and requirements",
      action: "Email Now",
      link: `mailto:${contactInfo.email}?subject=Interior Design Inquiry`,
      color: "purple"
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'whatsapp':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'email':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-100 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-6">
            To contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to transform your space? Get in touch with us today and let's discuss 
            how we can bring your vision to life.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white rounded-xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-yellow-600">Sun-Thu</div>
              <div className="text-sm text-gray-600">9am-9pm</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-yellow-600">Free</div>
              <div className="text-sm text-gray-600">Consultation</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-yellow-600">Custom</div>
              <div className="text-sm text-gray-600">Solutions</div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onMouseEnter={() => setHoveredButton(method.id)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                method.color === 'green' ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' :
                method.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
              }`}>
                {getIcon(method.icon)}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className={`text-sm font-medium mb-4 ${
                  method.color === 'green' ? 'text-green-600' :
                  method.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                }`}>
                  {method.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>

                {/* Action Button */}
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`inline-block px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    method.color === 'green' 
                      ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-200' :
                    method.color === 'blue'
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-200' :
                      'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-purple-200'
                  } transform hover:scale-105`}
                >
                  {method.action}
                </a>
              </div>
            </div>
          ))}
        </div> 
        {/* View Full Contact Page Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-full font-medium bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 shadow-lg"
          >
            For more information
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;