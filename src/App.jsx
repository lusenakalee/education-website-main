import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testimonial from "./components/container/Testimonial";
import HomePage from "./pages/HomePage";
import { Navbar } from "./components";
import ProjectsPage from "./pages/ProjectsPage";
import AllPostsPage from "./pages/AllPostsPage";

import SingleProjectPage from "./pages/SingleProjectPage";
import SinglePostPage from "./pages/SinglePostPage";


import SinglePublicationPage from "./pages/SinglePublicationPage";
import PublicationsPage from "./pages/PublicationsPage";
import AboutPage from "./pages/AboutPage";
import AllPosts from "./pages/AllBlogs";
import OnePost from "./pages/oneBlog";

function App() {
  return (
    
  
     <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route component={AllPosts} path="/blog" exact />
        <Route component={OnePost} path="/blog:slug" />
        {/* <Route path="/blog" element={<AllPostsPage/>} />
        <Route path="/blog/:id" element={<SinglePostPage/>} /> */}
        <Route path="/project/:id" element={<SingleProjectPage />} />
        <Route path="/publication/:id" element={<SinglePublicationPage />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
