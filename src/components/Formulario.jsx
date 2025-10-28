import useForm from "../hooks/useForm";

function Formulario() {
  const [form, handleChange, resetForm] = useForm({ nombre: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="nombre" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="correo" />
      <button type="submit">enviaar</button>
    </form>
  );
}

export default Formulario;