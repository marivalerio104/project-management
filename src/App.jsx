import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import NewProject from './pages/NewProject/NewProject';
import Project from './pages/Project/Project';
import './App.css';

export default function App() {
  const [projects, setProjects] = useState(
  [
    {
      id: "1",
      name: "Project 1",
      dueDate: "2023-12-31",
      description: "This is the first project",
      tasks: [
        {
          id: "1",
          task: "Task 1",
        },
        {
          id: "2",
          task: "Task 2",
        }
      ]
    },
    {
      id: "2",
      name: "Project 2",
      dueDate: "2023-12-31",
      description: "This is the second project",
      tasks: [
        {
          id: "1",
          task: "Task",
        },
      ]
    }
  ]);

  return <>
    <ToastContainer toastClassName="custom-toast" draggable theme="dark"/>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout projects={projects} />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/new" element={<NewProject setProjects={setProjects} />} />
          <Route path="/project/:id" element={<Project projects={projects} setProjects={setProjects} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}