import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import NewProject from './pages/NewProject/NewProject';
// import Project from './pages/Project/Project';
import './App.css';

export default function App() {
  const [projects, setProjects] = useState(
  [
    {
      id: 1,
      name: "Project 1",
      description: "This is the first project",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "This is the first task",
        },
        {
          id: 2,
          name: "Task 2",
          description: "This is the second task",
        }
      ]
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is the second project",
      tasks: [
        {
          id: 1,
          name: "Task",
          description: "This is a task",
        },
      ]
    }
  ]);

  return <BrowserRouter>
    <Routes>
      <Route element={<Layout projects={projects} />}>
        <Route path="/" element={<Home />} />
        <Route path="/project/new" element={<NewProject />} />
        {/* <Route path="/project/:id" element={<Project />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
}