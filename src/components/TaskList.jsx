export const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    <h1>No hay tareas</h1>;
  }

  return (
    <>
      <h1>TaskList</h1>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.descripcion}</p>
          </div>
        ))}
      </div>
    </>
  );
};
