// src/App.js
import './styles/globals.css';
import useCursor from './hooks/useCursor';

import Navbar  from './components/Navbar/Navbar';
import Hero    from './components/Hero/Hero';
import About   from './components/About/About';
import Work    from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer  from './components/Footer/Footer';

function App() {
  const { dotRef, ringRef } = useCursor();

  return (
    <>
      {/* Custom cursor elements */}
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;