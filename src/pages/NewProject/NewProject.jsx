import "./NewProject.css";
import Button from "../../components/Button/Button";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function NewProject({ setProjects }) {
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
    setProjects(prev => [...prev, { ...newProject, id: uuidv4() }]);
  }

  return <form id="new-project" onSubmit={handleSubmit}>
    <h2>NEW PROJECT</h2>
    <div className="input-group">
      <label htmlFor="name">Project Name</label>
      <input id="name" type="text" required value={newProject.name} onChange={handleChange} />
    </div>
    <div className="input-group">
      <label htmlFor="description">Project Description</label>
      <textarea id="description" rows={3} value={newProject.description} onChange={handleChange}></textarea>
    </div>
    <div className="input-group">
      <label htmlFor="dueDate">Due Date</label>
      <input id="dueDate" type="date" value={newProject.dueDate} onChange={handleChange} />
    </div>
    <Button type="submit">Create Project</Button>
  </form>
}