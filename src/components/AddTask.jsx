import { useState } from "react";
import Input from "./Input";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });
  return (
    <div className="space-y-4 p-6 bg-slate-700 rounded-md flex flex-col">
      <Input
        type="text"
        placeholder="Digite o nome da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim()) {
            return alert("Preencha o nome da tarefa.");
          }

          addTask({ title, description });
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
