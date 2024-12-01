import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stake from './pages/Stake';
import Roadmap from './pages/Roadmap';
import Whitepaper from './pages/Whitepaper';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-vanth-base text-white">
        <div className="animated-bg"></div>
        <Navbar />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stake" element={<Stake />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;