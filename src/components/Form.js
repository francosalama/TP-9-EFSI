import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div class="one-half column">
        <h2>Crear mi Cita</h2>
        <form>
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            class="u-full-width"
            placeholder="Nombre Mascota"
            value=""
          ></input>
          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            class="u-full-width"
            placeholder="Nombre dueño de la mascota"
            value=""
          ></input>
          <label>Fecha</label>
          <input type="date" name="fecha" class="u-full-width" value=""></input>
          <label>hora</label>
          <input type="time" name="hora" class="u-full-width" value=""></input>
          <label>Sintomas</label>
          <textarea name="sintomas" class="u-full-width"></textarea>
          <button type="submit" class="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
