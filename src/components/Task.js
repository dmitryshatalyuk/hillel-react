import { useState } from "react";

export function Task({ id, title, deadline, completed, moveTask }) {
  const [taskStatus, setStatus] = useState(completed);

  const handleStatus = () => {
    setStatus(!taskStatus);
    moveTask(id, !taskStatus);
  };

  return (
    <li className="task">
      <button className="complete" onClick={handleStatus}></button>
      <div className="task-body">
        <h4 className="task-title">{title}</h4>
        <p className="task-deadline">Deadline: {deadline}</p>
      </div>
    </li>
  );
}
