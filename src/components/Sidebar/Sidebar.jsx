import "./Sidebar.css";
import Button from "../Button/Button";
import { ProjectsContext } from "../../store/ProjectsContext";
import { useContext } from "react";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const { projects } = useContext(ProjectsContext);

  return <nav>
    <h2>MY PROJECTS</h2>
    <Button to="/project/new">Add Project</Button>
    {projects.map(project => (
      <NavLink key={project.id} to={`/project/${project.id}`}>
        {project.name}
      </NavLink>
    ))}
  </nav>
}