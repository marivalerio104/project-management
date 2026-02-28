import "./Tasks.css";
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

export default function Tasks({ tasks, setProjects, projectId }) {
  const [newTask, setNewTask] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState();
  const confirmationModal = useRef();

  function handleAddTask(e) {
    e.preventDefault();
    toast.success("Task added successfully!");
    setProjects(prev => prev.map(p =>
      p.id === projectId ? {
        ...p, tasks: [...p.tasks, { id: uuidv4(), task: newTask }]
      } : p
    ));
    setNewTask("");
  }

  function handleTaskChange(e) {
    setNewTask(e.target.value);
  }

  function handleClickClear(id) {
    setSelectedTaskId(id);
    confirmationModal.current.showModal();
  }

  function handleClear() {
    toast.success("Task cleared successfully!");
    confirmationModal.current.close();
    setProjects(prev => prev.map(p =>
      p.id === projectId ? {
        ...p, tasks: p.tasks.filter(task => task.id !== selectedTaskId)
      }
      : p
    ));
  }

  return <>
    <section id="tasks">
      <h3>Tasks</h3>
      <form onSubmit={handleAddTask}>
        <Input placeholder="Write a new task" id="new-task" required 
          onChange={handleTaskChange} value={newTask}
        />
        <Button type="submit" variant="secondary">Add Task</Button>
      </form>
      {tasks.length === 0 ? <p>No tasks yet.</p> :
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
    </section>

    <ConfirmationModal ref={confirmationModal} onConfirm={handleClear}>
      Are you sure you want to clear the task?
    </ConfirmationModal>
  </>
}