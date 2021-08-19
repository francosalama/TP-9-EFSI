import React, { Component, useState } from "react";

const Form = ({crearCita}) => {
    const [cita, guardarCita] = useState({
      nombreMascota: "",
      nombreDuenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });

    const [error, guardarError] = useState(false);  

    const { nombreMascota, nombreDuenio, fecha, hora, sintomas } = cita; 

    const onChange = e =>{
      guardarCita({
        ...cita,
        [e.target.name]:e.target.value
      });
    }

    const onSubmit = e =>{
          e.preventDefault();

        if(nombreMascota.trim === '' || nombreDuenio.trim === '' || fecha.trim === '' || hora.trim === '' || sintomas.trim === ''){
          console.log('nashe')
          guardarError(true);
          return;
        }

        guardarError(false);
        crearCita(cita);
        
        guardarCita({
          nombreMascota: "",
          nombreDuenio: "",
          fecha: "",
          hora: "",
          sintomas: "",
        })
    }

    return (
      <div class="one-half column">
        <h2>Crear mi Cita</h2>
        <form
          onSubmit={onSubmit}
        >
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="nombreMascota"
            class="u-full-width"
            placeholder="Nombre Mascota"
            value={nombreMascota}
            onChange={onChange}
          ></input>
          <label>Nombre Dueño</label>
          <input
            type="text"
            name="nombreDuenio"
            class="u-full-width"
            placeholder="Nombre dueño de la cita"
            value={nombreDuenio}
            onChange={onChange}
          ></input>
          <label>Fecha</label>
          <input 
            type="date" 
            name="fecha" 
            class="u-full-width"
            value={fecha}
            onChange={onChange}
          ></input>
          <label>hora</label>
          <input 
            type="time" 
            name="hora" 
            class="u-full-width"
            value={hora}
            onChange={onChange}
          ></input>
          <label>Sintomas</label>
          <textarea 
            name="sintomas" 
            class="u-full-width"
            value={sintomas}
            onChange={onChange}
          ></textarea>
          <button 
            type="submit"
            class="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    );
}

export default Form;
