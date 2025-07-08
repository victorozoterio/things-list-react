import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks({ tasks, toggleTaskStatus, deleteTask }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-700 rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => toggleTaskStatus(task.id)}
            className={`bg-slate-500 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-500 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 p-2 rounded-md text-white"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
