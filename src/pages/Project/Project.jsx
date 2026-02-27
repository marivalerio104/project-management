import "./Project.css";
import Button from "../../components/Button/Button";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Project({ projects, setProjects }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { name, description, dueDate, tasks } = projects.find(p => p.id === id);
  const confirmationModal = useRef();

  function handleDeleteProject() {
    setProjects(projects.filter(p => p.id !== id));
    toast.success("Project deleted successfully.");
    navigate("/");
  }

  return <>
    <div id="project">
      <header>
        <h2>{name}</h2>
        <Button variant="secondary" onClick={() => confirmationModal.current.showModal()}>
          Delete
        </Button>
      </header>
      <p>Due date: {dueDate}</p>
      <p>{description}</p>
      <hr />
      <h3>Tasks</h3>
      <ul>
        {tasks.map(task => <li key={task.id}>
          {task.task}

        </li>)}
      </ul>
    </div>

    <ConfirmationModal ref={confirmationModal} onConfirm={handleDeleteProject}
      description="Are you sure you want to delete this project?"
    />
  </>
}