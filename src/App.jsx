import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React com Typescript",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Vue",
      description: "Estudar Vue com Typescript",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Angular",
      description: "Estudar Angular com Typescript",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-white flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-700 font-bold text-center mb-4">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
