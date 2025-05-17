import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { Brain, Send, Code, BarChart, FileCode, CodepenIcon } from 'lucide-react';

const EngineeringAssistantDemo: React.FC = () => {
  const [userQuery, setUserQuery] = useState('');
  const [responses, setResponses] = useState<Array<{ query: string; response: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock response - in a real application, this would call the Gemini API
      const mockResponse = generateMockResponse(userQuery);
      
      setResponses([...responses, { query: userQuery, response: mockResponse }]);
      setUserQuery('');
      setIsLoading(false);
    }, 1500);
  };

  const generateMockResponse = (query: string): string => {
    // Simple mock responses based on keywords
    if (query.toLowerCase().includes('material')) {
      return "Based on your requirements, I recommend using aluminum alloy 6061-T6 for your application. It offers excellent strength-to-weight ratio, good corrosion resistance, and is easily machinable. The T6 temper provides improved strength through heat treatment.";
    } else if (query.toLowerCase().includes('process') || query.toLowerCase().includes('workflow')) {
      return "The standard manufacturing process involves these key steps: 1) Design validation, 2) Material procurement, 3) CNC machining with proper tolerances, 4) Quality inspection using coordinate measuring machines, 5) Surface treatment, and 6) Final assembly. Each step requires appropriate documentation per ISO 9001 standards.";
    } else if (query.toLowerCase().includes('calculation') || query.toLowerCase().includes('formula')) {
      return "For this stress calculation, use the formula: σ = F/A where σ is stress (Pa), F is force (N), and A is cross-sectional area (m²). For your specific case with dynamic loading, consider applying a safety factor of 1.5-2.0 based on aerospace industry standards.";
    } else {
      return "I understand your query about " + query + ". To provide a precise answer, I'd need additional context about your specific engineering application, materials involved, and design constraints. Could you provide more details about your project requirements?";
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="page-container">
        <PageHeader 
          title="Engineering Assistant Demo" 
          subtitle="Experience a Gemini-powered AI assistant designed to provide technical information for engineering processes"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <SectionHeading>Try the Assistant</SectionHeading>
              <p className="text-gray-600 mb-6">
                Ask a question about engineering materials, processes, calculations, or technical specifications.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 h-80 overflow-y-auto">
                {responses.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <Brain size={48} className="mb-4" />
                    <p>Ask a question to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {responses.map((exchange, index) => (
                      <div key={index}>
                        <div className="bg-blue-100 p-3 rounded-lg inline-block max-w-[80%] mb-2">
                          <p className="text-blue-800">{exchange.query}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%] ml-auto">
                          <p className="text-gray-800">{exchange.response}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  className="w-full p-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ask a question about engineering..."
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 disabled:text-gray-400"
                  disabled={isLoading || !userQuery.trim()}
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <SectionHeading>How This Works</SectionHeading>
              <p className="text-gray-600 mb-6">
                This prototype demonstrates how the Google Gemini API can be integrated into a web application to create an intelligent assistant for engineers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <Brain size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Natural Language Processing</h3>
                    <p className="text-gray-600">The assistant uses advanced NLP to understand technical engineering queries and provide relevant responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <FileCode size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Technical Knowledge Base</h3>
                    <p className="text-gray-600">Drawing from a vast repository of engineering knowledge, the assistant can provide information on materials, processes, and technical specifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <CodepenIcon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Context-Aware Responses</h3>
                    <p className="text-gray-600">The system maintains conversation context to provide more relevant and specific answers as the conversation progresses.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Skills Demonstrated</h3>
              <ul className="space-y-3">
                {[
                  { icon: <Code size={20} />, text: "API Integration (Google Gemini)" },
                  { icon: <CodepenIcon size={20} />, text: "Backend Development (PHP in WordPress)" },
                  { icon: <FileCode size={20} />, text: "Frontend Development (HTML, JavaScript, AJAX)" },
                  { icon: <Brain size={20} />, text: "AI Prompt Engineering" },
                  { icon: <Code size={20} />, text: "Python" },
                  { icon: <Brain size={20} />, text: "Artificial Intelligence & AI-Powered Systems" },
                  { icon: <FileCode size={20} />, text: "Digital Process Documentation" },
                  { icon: <BarChart size={20} />, text: "Data Handling & Analysis" }
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-600 mr-2">{skill.icon}</span>
                    <span>{skill.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Potential Future Enhancements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Integration with technical documentation systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>CAD file analysis and visualization capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Personalized responses based on user expertise level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Real-time collaboration features for engineering teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Multi-language support for global engineering teams</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringAssistantDemo;