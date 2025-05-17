import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { Briefcase, GraduationCap, Heart, MapPin } from 'lucide-react';

const MyProfile: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="page-container">
        <PageHeader 
          title="About Joshua Arakkal" 
          subtitle="AI-Driven Mechanical Engineer and Automation Specialist"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-40"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <img 
            src="file:///C:/Users/JOSHUA/Documents/WhatsApp%20Image%202025-05-17%20at%2008.34.40_6a6e956b.jpg" 
                    alt="Joshua Arakkal" 
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-20 pb-6 px-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Joshua Arakkal</h3>
                <p className="text-blue-600 mb-4">AI-Driven Mechanical Engineer</p>
                
                <div className="flex items-center justify-center text-gray-600 mb-6">
                  <MapPin size={18} className="mr-1" />
                  <span>Stade, Germany</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700">Languages</h4>
                      <ul className="mt-2">
                        <li>English (C2)</li>
                        <li>German (A2)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Passions</h4>
                      <div className="flex flex-wrap gap-2 mt-2 justify-center">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Cycling</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Coding</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Trekking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <SectionHeading>Personal Summary</SectionHeading>
              <p className="text-gray-700 mb-4">
                As a Master's candidate in Digitalization and Automation at PFH Private University of Applied Sciences, I offer a unique blend of Mechanical Engineering, AI, IT Security, and Project Management expertise. I have a proven ability to lead complex projects, optimize workflows, and drive innovation in dynamic environments.
              </p>
              <p className="text-gray-700 mb-4">
                My academic journey began with a Mechanical Engineering degree from Don Bosco Institute of Technology, providing a strong foundation in engineering principles. My passion for technology then led me to delve into IT Security, where I gained experience as an IT Security Manager at JSJ International Trading, assessing risks and safeguarding enterprise systems.
              </p>
              <p className="text-gray-700 mb-4">
                A key experience was my internship at PepsiCo Plant (Frito-Lays), where I focused on reducing chip production overflow by a significant 90% by implementing AI-powered error reduction and advanced monitoring systems. This role solidified my interest in applying AI and automation to solve real-world industrial challenges and deliver scalable solutions with significant operational impact.
              </p>
              <p className="text-gray-700">
                I am versatile, highly adaptable, and eager to contribute to cutting-edge technologies, particularly in the realm of digital process documentation and AI-based assistance systems, which aligns perfectly with the opportunity at Airbus Operations (CTC GmbH).
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <SectionHeading>Education</SectionHeading>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <GraduationCap size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Masters in Digitalization and Automation</h3>
                    <p className="text-blue-600">PFH Private University of Applied Sciences, Stade, Germany</p>
                    <p className="text-gray-600">October 2023 – February 2025</p>
                    <p className="text-gray-700 mt-2">
                      <strong>Focus:</strong> Project Management, Finance, Machine Learning, Automation
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <GraduationCap size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Mechanical Engineering</h3>
                    <p className="text-blue-600">Don Bosco Institute of Technology, Mumbai, India</p>
                    <p className="text-gray-600">June 2018 – May 2022</p>
                    <p className="text-gray-700 mt-2">
                      <strong>Relevant Coursework:</strong> Solidworks, Thermodynamics, Quality control, Robotics, Aerodynamics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <SectionHeading>Work Experience</SectionHeading>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Briefcase size={24} className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">IT Security Manager</h3>
                  <p className="text-blue-600">JSJ International Trading</p>
                  <p className="text-gray-600">June 2022 – July 2023</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Conducted comprehensive risk assessments and security audits for enterprise systems</li>
                    <li>Implemented effective vulnerability management practices</li>
                    <li>Maintained robust network security monitoring</li>
                    <li>Optimized project workflows and documentation management</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Briefcase size={24} className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Engineering Intern</h3>
                  <p className="text-blue-600">PepsiCo Plant (Frito-Lays)</p>
                  <p className="text-gray-600">March 2022 – May 2022</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Reduced chip production overflow by 90% through implementation of AI-powered error reduction</li>
                    <li>Developed advanced monitoring systems for production processes</li>
                    <li>Implemented remote connectivity software for improved oversight</li>
                    <li>Collaborated with cross-functional teams to optimize manufacturing workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <SectionHeading>Personal Interests</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Cycling</h3>
                <p className="text-gray-600">Exploring new trails and challenging routes, both for fitness and leisure.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Coding</h3>
                <p className="text-gray-600">Building personal projects and exploring new programming languages and frameworks.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Trekking</h3>
                <p className="text-gray-600">Hiking through mountains and forests, connecting with nature and enjoying scenic views.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProfile;