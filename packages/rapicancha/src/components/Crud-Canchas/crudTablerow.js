import React from "react";

const Tablerow = ({el,setDatatoEdit, deleteData}) => {

    let {Hora, lunes,martes,miercoles,jueves,viernes,sabado,domingo,id} =el;
    return(
        <tr>
        <td>{Hora}</td>
        <td>{lunes}</td>
        <td>{martes}</td>
        <td>{miercoles}</td>
        <td>{jueves}</td>
        <td>{viernes}</td>
        <td>{sabado}</td>
        <td>{domingo}</td>
        <td>
            <button onClick={()=> setDatatoEdit(el)}>Editar</button>
            <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
    </tr>
    )
    
}
export default Tablerow;