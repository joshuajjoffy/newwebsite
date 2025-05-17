import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EngineeringAssistantDemo from './pages/EngineeringAssistantDemo';
import MyProfile from './pages/MyProfile';
import SkillsQualifications from './pages/SkillsQualifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineering-assistant-demo" element={<EngineeringAssistantDemo />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/skills-qualifications" element={<SkillsQualifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;