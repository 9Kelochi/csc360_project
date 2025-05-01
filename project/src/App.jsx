import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MainSearch from './components/MainSearch';
import Hero from './components/Hero';
import Comments from './components/Comments';
import SubmitForm from './components/SubmitForm';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <MainSearch />
      <Comments />
      <SubmitForm />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-900 text-white font-sans leading-relaxed flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
