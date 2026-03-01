import "./Sidebar.css";
import Button from "../Button/Button";
import { NavLink } from 'react-router-dom';

export default function Sidebar({ projects }) {
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