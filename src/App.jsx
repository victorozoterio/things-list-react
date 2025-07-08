import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Essa função será executada uma única vez assim que o componente for montado
  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setTasks(data);
    };
    // SE VOCÊ QUISER É POSSÍVEL CHAMAR UMA API PARA PREENCHER SUA LISTA DE TAREFAS
    // getTasks();
  }, []);

  function toggleTaskStatus(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function addTask(task) {
    const newTask = {
      id: uuidv4(),
      title: task.title,
      description: task.description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-white flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
