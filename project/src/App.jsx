import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/main_page/Header';
import Hero from './components/main_page/Hero';
import Comments from './components/main_page/Comments';
import SubmitForm from './components/main_page/SubmitForm';
import Footer from './components/main_page/Footer';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

const Home = () => {
  return (
    <>
      <Hero />
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
