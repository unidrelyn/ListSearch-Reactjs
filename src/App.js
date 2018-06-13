import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container.js';

//Servicio REST usando CRUD

/*const list = [
  {
    name: 'colibri',
    zone: 'Caldas'
  },
  {
    name: 'carpintero',
    zone: 'Cundinamarca'
  },
  {
    name: 'paloma',
    zone: 'Antioquia'
  }
];

localStorage.setItem('list', JSON.stringify(list));*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PRUEBA IAS</h1>
        </header>
        <Container subtitle="Buscador de Aves" />
      </div>
    );
  }
}

export default App;
