import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from "./components/HelloWorld";
import Variables from "./components/Variables";
import ListaBancos from './components/ListaBancos';
import ListaBancosAI from './components/ListaBancosAI';

function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
      <h1>Componente 1</h1>
      <HelloWorld />
      <hr />
      <h1>Componente 2</h1>
      <Variables />
      <hr />
      <h1>Componente 3</h1>
      <ListaBancos />
      <h1>Componente 3 con AI</h1>
      <ListaBancosAI/>
    </div>
  );
}

export default App;