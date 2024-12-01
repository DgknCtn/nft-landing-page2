import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3ReactProvider } from '@web3-react/core';
import type { ExternalProvider, JsonRpcFetchFunc } from '@ethersproject/providers';
import { Web3Provider } from '@ethersproject/providers';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Home from './pages/Home';
import Stake from './pages/Stake';
import Roadmap from './pages/Roadmap';
import Whitepaper from './pages/Whitepaper';
import NotFound from './pages/NotFound';
import { initGA, logPageView } from './utils/analytics';

const queryClient = new QueryClient();

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

// Analytics wrapper component
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return <>{children}</>;
};

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AnalyticsWrapper>
            <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
              <Header />
              <SocialSidebar />
              <div className="relative z-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/stake" element={<Stake />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/whitepaper" element={<Whitepaper />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
              
              {/* Background Gradients */}
              <div className="fixed inset-0 z-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
              </div>
            </div>
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: '#1f2937',
                  color: '#fff',
                  border: '1px solid #374151',
                },
              }}
            />
          </AnalyticsWrapper>
        </Router>
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;