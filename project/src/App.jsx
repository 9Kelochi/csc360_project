import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainSearch from './components/MainSearch';
import Hero from './components/Hero';
import Comments from './components/Comments';
import SubmitForm from './components/SubmitForm';
import ItemsDisplay from './components/ItemsDisplay';

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-900 text-white font-sans leading-relaxed">
        <Header />
        {showResults ? (
          <ItemsDisplay />
        ) : (
          <>
            <Hero />
            <MainSearch onSearch={() => setShowResults(true)} />
            <Comments />
            <SubmitForm />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;