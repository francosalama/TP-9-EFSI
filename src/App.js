import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Citas from './components/Citas';
import ListadoCitas from './components/ListadoCitas';
import { useState } from 'react';

function App() {

  const [listadoCitas, guardarListadoCitas] = useState([]);

  const crearCita = (cita) =>{
    guardarListadoCitas([
      ...listadoCitas,
      cita
    ]);
  }

  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
            <Form
              crearCita={crearCita}>
            </Form>
            <ListadoCitas
              listadoCitas={listadoCitas}>

            </ListadoCitas>
        </div>
      </div>
    </div>
  );
}

export default App;
