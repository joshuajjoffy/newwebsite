import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { Brain, Code, FileCode, BarChart, Cpu, Github, Eye, Bot, LineChart, Wrench } from 'lucide-react';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  bgColor: string;
  iconColor: string;
  link?: string;
  linkedInEmbed?: string;
  featured?: boolean;
}> = ({ title, description, icon, skills, bgColor, iconColor, link, linkedInEmbed, featured }) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'border-2 border-blue-400' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {linkedInEmbed ? (
        <div className="aspect-video">
          <iframe
            src={linkedInEmbed}
            height="100%"
            width="100%"
            frameBorder="0"
            allowFullScreen
            title={title}
            className="w-full h-full"
          ></iframe>
        </div>
      ) : (
        <div className={`${bgColor} p-6 flex justify-center items-center h-48`}>
          <div className={`${iconColor} rounded-full p-4 bg-white bg-opacity-20`}>
            {icon}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
          {featured && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills & Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {link && (
          <div className="text-right">
            {link.startsWith('/') ? (
              <Link to={link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                View Details <Eye size={16} className="ml-1" />
              </Link>
            ) : (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                View on LinkedIn <Github size={16} className="ml-1" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="page-container">
        <PageHeader 
          title="My Projects" 
          subtitle="Below are some of the key projects I have undertaken, demonstrating my skills in AI, automation, engineering design, and software development."
        />

        <motion.div 
          className="mt-12 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Featured Project</SectionHeading>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Brain size={80} className="text-white mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-white">Engineering Assistant Demo</h2>
                  <p className="text-blue-100 mt-2">AI-Powered Engineering Tool</p>
                </div>
              </div>
              
              <div className="p-8">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4 inline-block">
                  Featured Project
                </span>
                
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Engineering Assistant Demo</h3>
                
                <p className="text-gray-600 mb-6">
                  A functional web-based prototype developed using WordPress, PHP, and the Google Gemini API. 
                  This interactive tool simulates an intelligent assistant for engineers, processing natural language 
                  queries to provide technical information relevant to engineering processes.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "WordPress", "JavaScript", "AJAX", "Google Gemini API", "HTML", "CSS", "AI Prompt Engineering"].map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/engineering-assistant-demo" 
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm inline-flex items-center"
                >
                  Explore Demo <Eye size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading>Academic & Personal Projects</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Decoding Stocks with Python"
              description="Utilized Python to analyze stock market data, revealing price trends and correlations through data visualization and statistical analysis."
              icon={<LineChart size={36} className="text-white" />}
              skills={["Python", "Data Analysis", "Stock Market Analysis", "Data Visualization", "Statistical Analysis"]}
              bgColor="bg-blue-600"
              iconColor="text-blue-600"
              link="https://www.linkedin.com/posts/joshua-arakkal_financialanalysis-datavisualization-python-activity-7308819420556996608-shhe"
              linkedInEmbed="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7308819419210866688"
            />
            
            <ProjectCard 
              title="Invisibility Cloak"
              description="Created a real-time 'invisibility cloak' effect using OpenCV and Python for dynamic background replacement, demonstrating advanced computer vision techniques."
              icon={<FileCode size={36} className="text-white" />}
              skills={["Python", "OpenCV", "Computer Vision", "Image Processing", "Real-time Video Analysis"]}
              bgColor="bg-purple-600"
              iconColor="text-purple-600"
              link="https://www.linkedin.com/posts/joshua-arakkal_computervision-opencv-python-activity-7305873602262749184-FjgI"
              linkedInEmbed="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7305873600895508480"
            />
            
            <ProjectCard 
              title="AI Sleep Detection"
              description="Developed a system for enhancing safety in autonomous and industrial vehicles with real-time drowsiness alerts using AI and computer vision technologies."
              icon={<Eye size={36} className="text-white" />}
              skills={["AI", "Real-time Systems", "Python", "OpenCV", "Computer Vision", "Safety Systems"]}
              bgColor="bg-red-600"
              iconColor="text-red-600"
              link="https://www.linkedin.com/posts/joshua-arakkal_sleepdetector-drowsinessprevention-safety-activity-7293682583140253696-qLAF"
              linkedInEmbed="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7293682581781045248"
            />
            
            <ProjectCard 
              title="KUKA Robot Programming"
              description="Demonstrated robotic automation by scripting a KUKA robot to inscribe university initials, showcasing precise motion control and programming capabilities."
              icon={<Cpu size={36} className="text-white" />}
              skills={["Robotic Automation", "KUKA Robot Programming", "Motion Control", "Industrial Robotics"]}
              bgColor="bg-orange-600"
              iconColor="text-orange-600"
              link="https://www.linkedin.com/posts/joshua-arakkal_robotics-automation-engineering-activity-7291403842972176385-Btc5"
              linkedInEmbed="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7291403841575755776"
            />
            
            <ProjectCard 
              title="Electromagnetic Braking System"
              description="Designed and developed an innovative electromagnetic braking system for electric bicycles (E-bikes). The system aimed to be fast, increase efficiency, and reduce risks and costs associated with traditional braking systems."
              icon={<Wrench size={36} className="text-white" />}
              skills={["Mechanical Design", "System Innovation", "SolidWorks", "Engineering Analysis"]}
              bgColor="bg-green-600"
              iconColor="text-green-600"
              link="https://www.linkedin.com/posts/joshua-arakkal_engineering-ebikes-innovation-activity-7285970910400913409-PmDn"
              linkedInEmbed="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7285970909033754624"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <SectionHeading>Interested in Collaborating?</SectionHeading>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Let's connect and explore how we can work together!
              </p>
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;