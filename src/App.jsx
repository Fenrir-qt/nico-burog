import { BrowserRouter, Routes, Route,} from "react-router-dom";
import  React from 'react';
import LandingPage from "./pages/LandingPage";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
function App(){

  return(
    <BrowserRouter basename="/nico-burog">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
