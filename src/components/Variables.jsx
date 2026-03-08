
export default function Variables() {
  const nombre = "Ariana";
  const apellido = "Espinoza";
  const materia = "TC3004B";

  const nombreCompleto = nombre + ' ' + apellido;


  function getSaludo(nombreP) {
    return "Hola " + nombreP;
  }

  const estudiante = {
    matricula: "A01645270",
    nombre: "Ariana",
    edad: "20",
    direccion: {
      ciudad: "Mty",
      zip: 64840,
    },
  };


  return (
    <div>
      <h2>Componente con variables</h2>

      <p>Nombre completo: {nombreCompleto}</p>
      <p>Materia: {materia}</p>
      <p>Saludo: {getSaludo(nombre)}</p>

      <h3>Estudiante</h3>
      <p>Matrícula: {estudiante.matricula}</p>
      <p>Nombre: {estudiante.nombre}</p>
      <p>Edad: {estudiante.edad}</p>
      <p>Ciudad: {estudiante.direccion.ciudad}</p>
      <p>ZIP: {estudiante.direccion.zip}</p>

    </div>
  );
}