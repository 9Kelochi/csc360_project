import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Comments from './components/Comments';
import SubmitForm from './components/SubmitForm';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Comments />
        <SubmitForm />
      </div>
    </Router>
  );
}

export default App; 