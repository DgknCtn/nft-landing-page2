import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Whitepaper from './pages/Whitepaper';
import Whitelist from './pages/Whitelist';
import Stake from './pages/Stake';
import Admin from './pages/Admin';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
        <Navbar />
        <SocialSidebar />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/whitelist" element={<Whitelist />} />
            <Route path="/stake" element={<Stake />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
        
        {/* Background Gradients */}
        <div className="fixed inset-0 z-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-8 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;