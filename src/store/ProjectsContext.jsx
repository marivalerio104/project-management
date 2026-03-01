import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  // Initialize projects from localStorage
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  // Save projects to localStorage whenever projects state changes
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function addProject(newProject) {
    const newProjectId = uuidv4();
    setProjects(prev => [...prev, { ...newProject, id: newProjectId }]);
    return newProjectId; // Return the new project ID for navigation
  }

  function deleteProject(id) {
    setProjects(prev => prev.filter(p => p.id !== id));
  }

  function addTask(projectId, newTask) {
    setProjects(prev => prev.map(p =>
      p.id === projectId ? {
        ...p, tasks: [...p.tasks, { id: uuidv4(), task: newTask }]
      } : p
    ));
  }

  function deleteTask(projectId, taskId) {
    setProjects(prev => prev.map(p =>
      p.id === projectId ? {
        ...p, tasks: p.tasks.filter(task => task.id !== taskId)
      }
        : p
    ));
  }

  return (
    <ProjectsContext.Provider value={{ projects, addProject, deleteProject, addTask, deleteTask }}>
      {children}
    </ProjectsContext.Provider>
  );
}