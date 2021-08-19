import React, { Component } from "react";

const Cita = ({cita, eliminarCita}) => {
    return (
        <div class="cita">
          <p>
            Mascota: <span>{cita.nombreMascota}</span>
          </p>
          <p>
            Dueño: <span>{cita.nombreDuenio}</span>
          </p>
          <p>
            Fecha: <span>{cita.fecha}</span>
          </p>
          <p>
            Hora: <span>{cita.hora}</span>
          </p>
          <p>
            Sintomas: <span>{cita.sintomas}</span>
          </p>
          <button 
            class="button elimnar u-full-width"
            onClick={() => eliminarCita(cita.nombreMascota)}
            type="button"
            >Eliminar ×</button>
        </div>
    );
  }

export default Cita;
