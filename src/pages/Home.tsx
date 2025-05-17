import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Users, Briefcase, Brain, Database, Wrench } from 'lucide-react';

const DigitalRain: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="digital-rain">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="rain-column" style={{ 
            animationDelay: `${Math.random() * 2}s`,
            left: `${i * 4}%`
          }}>
            {Array.from({ length: 25 }).map((_, j) => (
              <span 
                key={j} 
                className="text-blue-400"
                style={{ 
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random()
                }}
              >
                {String.fromCharCode(33 + Math.random() * 93)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <DigitalRain />
        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-4">
                Joshua Arakkal
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 mb-6">
                AI-Driven Mechanical Engineer and Automation Specialist
              </p>
              <p className="text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
                A unique blend of Mechanical Engineering, AI, IT Security, and Project Management expertise. 
                Passionate about leveraging technology to solve complex problems and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/my-profile"
                  className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md"
                >
                  View Profile
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors shadow-sm"
                >
                  See Projects
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
                <img src="/joshua-profile.jpg" 
                  className="relative z-10 w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Key Areas of Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My multidisciplinary background allows me to bridge the gap between engineering, automation, and AI technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-10 w-10 text-blue-500" />,
                title: "Artificial Intelligence",
                description: "Developing AI-powered solutions for error reduction, activity recognition, and process optimization."
              },
              {
                icon: <Database className="h-10 w-10 text-blue-500" />,
                title: "Automation & Digitalization",
                description: "Designing automated systems and digital processes to enhance efficiency and reduce manual intervention."
              },
              {
                icon: <Wrench className="h-10 w-10 text-blue-500" />,
                title: "Mechanical Engineering",
                description: "Core engineering expertise with focus on design, thermodynamics, and innovative braking systems."
              },
              {
                icon: <Code className="h-10 w-10 text-blue-500" />,
                title: "Software Development",
                description: "Building applications with Python, PHP, JavaScript, and other technologies to create functional solutions."
              },
              {
                icon: <Briefcase className="h-10 w-10 text-blue-500" />,
                title: "Project Management",
                description: "Leading complex projects with effective workflow optimization and resource management."
              },
              {
                icon: <Users className="h-10 w-10 text-blue-500" />,
                title: "Team Collaboration",
                description: "Working effectively in diverse teams, combining technical expertise with strong communication skills."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work showcasing my expertise in AI, automation, and engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-600 h-48 flex items-center justify-center">
                <Brain className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Engineering Assistant Demo</h3>
                <p className="text-gray-600 mb-4">
                  A web-based prototype leveraging Google Gemini API to create an intelligent assistant for engineers.
                </p>
                <Link 
                  to="/engineering-assistant-demo" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Explore Demo →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-700 h-48 flex items-center justify-center">
                <Users className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Human Activity Recognition</h3>
                <p className="text-gray-600 mb-4">
                  CNN-LSTM model for accurate human activity recognition in videos, with data preprocessing and analysis.
                </p>
                <Link 
                  to="/projects" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="page-container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, innovative ideas, or opportunities to work together.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors shadow-md inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
