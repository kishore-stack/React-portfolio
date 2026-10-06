import Navbar from "./Components/NavBar"; // Ensure path matches your folder
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import React from "react";
import { useState } from "react";
import IntroUnlock from "./Components/Introunlock";

export default function App() {
 const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroUnlock onFinish={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}