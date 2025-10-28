import useToggle from "../hooks/useToggle";

function Detalles() {
  const [mostrar, toggleMostrar] = useToggle(false);

  return (
    <div>
      <button onClick={toggleMostrar}>
        {mostrar ? "ocultar detalles" : "mostrar detalles"}
      </button>
      {mostrar && <p>estos son detalles del contiene el componente.</p>}
    </div>
  );
}

export default Detalles;