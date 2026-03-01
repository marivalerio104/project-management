import "./Project.css";
import Tasks from "./components/Tasks/Tasks";
import Button from "../../components/Button/Button";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import { useRef } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Project({ projects, setProjects }) {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  if (!project) return <Navigate to="/project-management" replace />;
  const { name, description, dueDate, tasks } = project;
  const formattedDate = new Date(dueDate).toLocaleDateString(undefined, 
    {year: "numeric", month: "short", day: "numeric"});
  const confirmationModal = useRef();
  const navigate = useNavigate();

  function handleDeleteProject() {
    setProjects(prev => prev.filter(p => p.id !== id));
    toast.success("Project deleted successfully.");
    navigate("/project-management");
  }

  return <>
    <div id="project">
      <header>
        <h2>{name}</h2>
        <Button variant="secondary" onClick={() => confirmationModal.current.showModal()}>
          Delete
        </Button>
      </header>
      {dueDate && <p id="due-date">Due date: {formattedDate}</p>}
      <p id="description">{description}</p>
      <hr />
      <Tasks tasks={tasks} setProjects={setProjects} projectId={id} />
    </div>

    <ConfirmationModal ref={confirmationModal} onConfirm={handleDeleteProject}>
      Are you sure you want to delete this project?
    </ConfirmationModal>
  </>
}