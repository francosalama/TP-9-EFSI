import React from 'react';
import Cita from './Cita';

const ListadoCitas = ({listadoCitas, eliminarCita}) => {
    return ( 
        <div class="one-half column">
            <h2>Administra tus citas</h2>
            {listadoCitas.map(cita=>(
                <Cita
                    key={cita.nombreMascota}
                    cita = {cita}
                    eliminarCita = {eliminarCita}>
                </Cita>
            ))}
        </div>
     );
}
 
export default ListadoCitas;