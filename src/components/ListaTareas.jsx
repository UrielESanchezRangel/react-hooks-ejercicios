import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function ListaTareas() {
  const [tareas, setTareas] = useLocalStorage("tareas", []);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (!nuevaTarea.trim()) return;
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  return (
    <div>
      <h3>tareass</h3>
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="escribe una tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;