
import React from 'react'
import {bancos} from "../classes/bancos";

export default function ListaBancos() {
  return (
    <div>
      <h2>Lista de Bancos</h2>
      <ul>
        {bancos.map((banco) => (
          <li key={banco.id}>
            {banco.name} - {banco.country}
          </li>
        ))}
      </ul>
    </div>
  );
}