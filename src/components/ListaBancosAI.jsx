import { bancos } from "../classes/bancos";

function Bancos() {
  return (
    <section>
      <h2>Lista de Bancos con AI</h2>

      {bancos.length === 0 ? (
        <p>No hay bancos registrados</p>
      ) : (
        <ul>
          {bancos.map((banco) => (
            <li key={banco.id}>
              <strong>{banco.name}</strong> — {banco.country}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Bancos;