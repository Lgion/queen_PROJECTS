import React from 'react';
import Hero from './components/Hero';
import Games from './components/Games';
import Events from './components/Events';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
      <main>
        <Hero />
        <Games />
        <Events />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
  );
}

export default App;