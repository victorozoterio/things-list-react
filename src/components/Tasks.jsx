function Tasks(props) {
  console.log(props);
  return (
    <ul className="space-y-4 p-6 bg-slate-700 rounded-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="bg-slate-500 text-white p-2 rounded-md">
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
