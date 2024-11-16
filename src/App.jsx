import React from 'react';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
// import Chatbot from './Chatbot.jsx';
import TarsChatScript from './Tars.tsx';
// import ChatWidget from './ChatWidget.tsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
     {/* <Chatbot /> */}
      <TarsChatScript />
      {/* <ChatWidget /> */}
    </main>
  );
};

export default App;