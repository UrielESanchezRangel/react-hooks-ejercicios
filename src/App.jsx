import Detalles from "./components/Detalles.jsx";
import Formulario from "./components/Formulario.jsx";
import ListaTareas from "./components/ListaTareas.jsx";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Hooks</h1>

      <h2>1. useToggle</h2>
      <Detalles />

      <hr />

      <h2>2. useForm</h2>
      <Formulario />

      <hr />

      <h2>3. useLocalStorage</h2>
      <ListaTareas />
    </div>
  );
}

export default App;