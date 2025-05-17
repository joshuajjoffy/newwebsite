import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { Brain, Code, Database, Shield, Wrench, FileText, User, Languages } from 'lucide-react';

const SkillsQualifications: React.FC = () => {
  // Define skill categories with progress levels
  const technicalSkills = [
    { 
      category: "Artificial Intelligence & AI-Powered Systems",
      icon: <Brain size={24} className="text-blue-600" />,
      skills: [
        { name: "AI-powered error reduction systems", level: 90 },
        { name: "Machine Learning model development", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "Natural Language Processing", level: 75 }
      ]
    },
    { 
      category: "Automation",
      icon: <Database size={24} className="text-blue-600" />,
      skills: [
        { name: "Process Automation", level: 95 },
        { name: "KUKA Robot Programming", level: 85 },
        { name: "Industrial Automation Systems", level: 80 },
        { name: "PLC Programming", level: 70 }
      ]
    },
    { 
      category: "Programming & Development",
      icon: <Code size={24} className="text-blue-600" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "PHP", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    { 
      category: "IT Security",
      icon: <Shield size={24} className="text-blue-600" />,
      skills: [
        { name: "Risk Assessment", level: 90 },
        { name: "Vulnerability Management", level: 85 },
        { name: "Network Security Monitoring", level: 80 },
        { name: "Security Audits", level: 85 }
      ]
    },
    { 
      category: "Engineering & Design",
      icon: <Wrench size={24} className="text-blue-600" />,
      skills: [
        { name: "SolidWorks", level: 90 },
        { name: "Thermodynamics", level: 80 },
        { name: "Quality Control", level: 85 },
        { name: "Robotics", level: 75 },
        { name: "Aerodynamics", level: 70 }
      ]
    },
    { 
      category: "Documentation & Process Optimization",
      icon: <FileText size={24} className="text-blue-600" />,
      skills: [
        { name: "Documentation Management", level: 95 },
        { name: "Process Optimization", level: 90 },
        { name: "Workflow Analysis", level: 85 },
        { name: "Technical Writing", level: 80 }
      ]
    }
  ];

  const professionalSkills = [
    { name: "Project Management", level: 90 },
    { name: "Team Player", level: 95 },
    { name: "Leadership", level: 85 },
    { name: "Critical Thinking", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Problem-Solving", level: 95 },
    { name: "Quantitative Analysis", level: 80 },
    { name: "Coordination", level: 85 }
  ];

  const languageSkills = [
    { name: "English (C2)", level: 95 },
    { name: "German (A2)", level: 40 }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="page-container">
        <PageHeader 
          title="Skills & Qualifications" 
          subtitle="My technical and professional skills have been developed through rigorous academic training and hands-on experience in diverse environments."
        />

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <SectionHeading>Introduction</SectionHeading>
            <p className="text-gray-700">
              I am adept at leveraging technology to solve complex problems and drive efficiency, with a particular focus on AI and automation. 
              My expertise spans multiple domains including artificial intelligence, mechanical engineering, software development, and process optimization.
              The combination of technical knowledge and practical experience allows me to tackle challenges from multiple perspectives and deliver effective solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <SectionHeading>Technical Skills</SectionHeading>
            
            <div className="space-y-10">
              {technicalSkills.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="mb-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <User size={24} className="text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-700">Professional Skills</h2>
              </div>
              
              <div className="space-y-4">
                {professionalSkills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Languages size={24} className="text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-700">Languages</h2>
              </div>
              
              <div className="space-y-6">
                {languageSkills.map((language, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium text-lg">{language.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-500 h-3 rounded-full" 
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold">Master's Specialization in Automation</h4>
                    <p className="text-gray-600">PFH Private University of Applied Sciences</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold">IT Security Management</h4>
                    <p className="text-gray-600">JSJ International Trading</p>
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <SectionHeading>Demo Connection</SectionHeading>
            <p className="text-gray-700 mb-4">
              The 'Engineering Assistant Demo' on this site showcases my ability to implement AI solutions using tools like Google Gemini. 
              This functional prototype demonstrates how AI can be integrated into digital process documentation to enhance engineering workflows.
            </p>
            <div className="text-center">
              <a 
                href="/engineering-assistant-demo" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md"
              >
                Visit Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsQualifications;