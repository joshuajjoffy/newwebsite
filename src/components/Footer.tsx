import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold text-white">Joshua Arakkal</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-Driven Mechanical Engineer and Automation Specialist
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/joshua-arakkal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:joshua.joffyarakkal@pfh.de" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/my-profile" className="text-gray-400 hover:text-blue-400 transition-colors">My Profile</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/skills-qualifications" className="text-gray-400 hover:text-blue-400 transition-colors">Skills & Qualifications</Link>
              </li>
              <li>
                <Link to="/engineering-assistant-demo" className="text-gray-400 hover:text-blue-400 transition-colors">Engineering Assistant Demo</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+4917675389822</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">joshua.joffyarakkal@pfh.de</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Stade, Germany</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Joshua Arakkal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;