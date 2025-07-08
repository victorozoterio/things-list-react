import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, toggleTaskStatus, deleteTask }) {
  const navigate = useNavigate();

  function seeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-700 rounded-md">
      {tasks.length === 0 ? (
        <li className="text-slate-300">Nenhuma tarefa cadastrada.</li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => toggleTaskStatus(task.id)}
              className={`bg-slate-500 text-left w-full text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button
              onClick={() => seeDetailsClick(task)}
              className="bg-slate-500 p-2 rounded-md text-white"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 p-2 rounded-md text-white"
            >
              <Trash2Icon />
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default Tasks;
