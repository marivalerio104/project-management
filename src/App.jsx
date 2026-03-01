import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import NewProject from './pages/NewProject/NewProject';
import Project from './pages/Project/Project';
import './App.css';

export default function App() {
  // Initialize projects from localStorage
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  // Save projects to localStorage whenever projects state changes
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return <>
    <ToastContainer toastClassName="custom-toast" draggable theme="dark"/>
    <HashRouter>
      <Routes>
        <Route element={<Layout projects={projects} />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/new" element={<NewProject setProjects={setProjects} />} />
          <Route path="/project/:id" element={<Project projects={projects} setProjects={setProjects} />} />
        </Route>
      </Routes>
    </HashRouter>
  </>
}