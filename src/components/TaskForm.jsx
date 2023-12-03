import { useState } from 'react';

export const TaskForm = ({ createTaks }) => {
  const [title, setTitle] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      title,
      id: 4,
      descripcion: 'Algo nuevo',
    };
    createTaks(title);
    console.log(newTask);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        placeholder='Escribe tu tarea'
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>guardar</button>
    </form>
  );
};
