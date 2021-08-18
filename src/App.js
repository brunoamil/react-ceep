import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';

function App() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar nota</button>
      </form>
      <ListaDeNotas />
    </div>
  );
}

export default App;
