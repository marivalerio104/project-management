import "./NewProject.css";
import Button from "../../components/Button/Button";

export default function NewProject() {
  return <div id="new-project">
    <h2>NEW PROJECT</h2>
    <div className="input-group">
      <label htmlFor="new-name">Project Name</label>
      <input id="new-name" type="text" />
    </div>
    <div className="input-group">
      <label htmlFor="new-description">Project Description</label>
      <textarea id="new-description" rows={3}></textarea>
    </div>
    <div className="input-group">
      <label htmlFor="new-due-date">Due Date</label>
      <input id="new-due-date" type="date" />
    </div>
    <Button type="submit">Create Project</Button>
  </div>
}