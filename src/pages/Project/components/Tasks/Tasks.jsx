import "./Tasks.css";
import { useRef, useState } from 'react';
import Button from "../../../../components/Button/Button";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

export default function Tasks({ tasks, setProjects, projectId }) {
  const [selectedTaskId, setSelectedTaskId] = useState();
  const confirmationModal = useRef();

  function handleClickClear(id) {
    setSelectedTaskId(id);
    confirmationModal.current.showModal();
  }

  function handleClear() {
    confirmationModal.current.close();
    setProjects(prev => prev.map(p =>
      p.id === projectId ? {
        ...p, tasks: p.tasks.filter(task => task.id !== selectedTaskId)
      }
        : p
    ));
  }

  return <>
    <div id="tasks">
      <h3>Tasks</h3>
      {tasks.length === 0 ? <p>No tasks yet</p> :
        <ul>
          {tasks.map(task =>
            <li key={task.id}>
              {task.task}
              <Button variant="secondary" onClick={() => handleClickClear(task.id)}>
                Clear
              </Button>
            </li>)}
        </ul>
      }
    </div>

    <ConfirmationModal ref={confirmationModal} onConfirm={handleClear}
      description="Are you sure you want to clear the task?"
    />
  </>
}