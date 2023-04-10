import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Homepage from './components/Homepage.js';
import Menu from './components/Menu';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Error from './pages/Error';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SinglePost from './components/SinglePost';
import { PostConsumer } from './context';
const App = () => {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Homepage /> }> </Route>
      <Route path="/projects" element={<Projects/> }> </Route>
      <Route path="/blog" element={<Blog /> }> </Route>
      <Route path="/resume" element={<Resume /> }> </Route>
      <Route path="/contact-me" element={<Contact /> }> </Route>
      <Route path="/posts/:id" element={
        <PostConsumer>
          {(value) => {
            return <SinglePost post={value.currentPost} /> 
          }}
        </PostConsumer>
      
      
      
      } ></Route>
      <Route path="*" element={<Error /> }> </Route>   
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
