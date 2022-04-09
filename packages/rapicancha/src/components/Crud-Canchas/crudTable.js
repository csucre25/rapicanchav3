import React from "react";
import Tablerow from "./crudTablerow";

const CrudTable =({data, setDatatoEdit, deleteData}) =>{
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sabado</th>
                        <th>Domingo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?
                    (data.map((el) => (
                    <Tablerow 

                    key={el.id} 
                    el={el}
                    setDatatoEdit = {setDatatoEdit}
                    deleteData = {deleteData}/>)))
                    :(<tr><td colSpan='3'>Sin datos</td>
                    </tr>
                    )             
                   }
                </tbody>
            </table>
        </div>
    );
};
export default CrudTable;