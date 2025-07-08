function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-700 rounded-md flex flex-col">
      <input
        type="text"
        className=" outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite o nome da tarefa"
      />
      <input
        type="text"
        className="outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite a descrição da tarefa"
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
