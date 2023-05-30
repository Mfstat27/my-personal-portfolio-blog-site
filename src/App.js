import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Homepage from "./components/Homepage.js";
import Menu from "./components/Menu";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Error from "./pages/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SinglePost from "./components/SinglePost";
const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
