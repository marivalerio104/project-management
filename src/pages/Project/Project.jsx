import "./Project.css";
import Button from "../../components/Button/Button";
import { useParams } from 'react-router-dom';

export default function Project({ projects, setProjects }) {
  const { id } = useParams();
  const { name, description, dueDate, tasks } = projects.find(p => p.id === id);

  return <>
    <div id="project">
      <header>
        <h2>{name}</h2>
        <Button variant="secondary">
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
  </>
}