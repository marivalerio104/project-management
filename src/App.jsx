import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
// import NewProject from './pages/NewProject/NewProject';
// import Project from './pages/Project/Project';
import './App.css'

export default function App() {
  const [projects, setProjects] = useState([]);

  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects/new" element={<NewProject />} /> */}
        {/* <Route path="/projects/:id" element={<Project />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
}