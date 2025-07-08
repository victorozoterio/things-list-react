import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-700 rounded-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button className="bg-slate-500 text-left w-full text-white p-2 rounded-md">
            {task.title}
          </button>
          <button className="bg-slate-500 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
