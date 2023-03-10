import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectGallery from './components/pages/Project-Gallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename= "My-Portfolio-React">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/My-Portfolio-React/" element={<Home />} />
          <Route path="/My-Portfolio-React/contact" element={<Contact />} />
          <Route path="/My-Portfolio-React/project-gallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/My-Portfolio-React/about/*" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;