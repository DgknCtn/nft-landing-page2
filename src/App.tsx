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
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <SocialSidebar />
        <main className="pt-20 px-4 md:px-8 lg:px-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/whitelist" element={<Whitelist />} />
            <Route path="/stake" element={<Stake />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;