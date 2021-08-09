import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Citas from './components/Citas';

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
            <Form></Form>
            <Citas></Citas>
        </div>
      </div>
    </div>
  );
}

export default App;
