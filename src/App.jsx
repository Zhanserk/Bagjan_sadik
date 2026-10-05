import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Groups from './components/Groups';
import Advantages from './components/Advantages';
import Schedule from './components/Schedule';
import Tour from './components/Tour';
import MobileBar from './components/MobileBar';
import Gallery from './components/Gallery';
import Documents from './components/Documents';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Бөлімдер айналдырғанда жұмсақ пайда болады (.reveal → .in)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    document.documentElement.classList.add('reveal-on');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1 },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Groups />
        <Tour />
        <Advantages />
        <Schedule />
        <Gallery />
        <Documents />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
