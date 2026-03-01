import "./NewProject.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { ProjectsContext } from "../../store/ProjectsContext";
import { useContext } from "react";
import { toast } from 'react-toastify';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  const navigate = useNavigate();
  const { addProject } = useContext(ProjectsContext);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    dueDate: "",
    tasks: []
  });
  
  function handleChange(e) {
    const { id, value } = e.target;
    setNewProject(prev => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Project created successfully!");
    const newProjectId = addProject(newProject);
    navigate(`/project/${newProjectId}`);
  }

  return <form id="new-project" onSubmit={handleSubmit}>
    <h2>NEW PROJECT</h2>
    <Input id="name" type="text" required value={newProject.name} autoComplete="off"
      onChange={handleChange} label="Project Name" className="input"
    />
    <Input id="description" textarea rows={3} value={newProject.description}
      onChange={handleChange} label="Project Description" className="input"
    />
    <Input id="dueDate" type="date" value={newProject.dueDate}
      onChange={handleChange} label="Due Date" className="input"
    />
    <Button type="submit">Create Project</Button>
  </form>
}