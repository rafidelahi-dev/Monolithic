// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from './Components/DataProvider'

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";   // preview (5 items + View All)
import Founder from "./Components/Founder";    // preview (short + Know More)
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


// Full pages (create these files under src/pages/)
import ProjectsPage from "./Pages/ProjectsPage";
import FounderPage from "./Pages/FounderPage";
import ContactsPage from "./Pages/ContactsPage";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Navbar />

        <Routes>
          {/* Landing / single-page experience */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Founder />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Dedicated pages */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/contact" element={<ContactsPage />} />

          {/* Optional catch-all */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center">Page not found</div>} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
