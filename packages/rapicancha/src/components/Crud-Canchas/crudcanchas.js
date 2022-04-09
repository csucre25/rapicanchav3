import React, { useState} from 'react';
import CrudForm from './crudForm';
import CrudTable from './crudTable';
const dias = {
    Hora:'7:00',
    lunes: 1,
    martes: 'John Doe',
    miercoles: 'secret',
    jueves: 'john.doe@gmail.com',
    viernes: true,
    sabado:'',
    domingo :''
}
const initiaDb =[{
    id :'CS001',
    Hora:'7:00',
    lunes: 'Si',
    martes: 'No',
    miercoles: 'Si',
    jueves: 'No',
    viernes: 'Si',
    sabado:'Si',
    domingo :'Si'
}]; 

const Crudcanchas = () =>  {
    const [db, setDb]= useState(initiaDb);
    const [datatoEdit, setDatatoEdit]=useState(null);
    const [error,setError] = useState(null);
    const [loading, setLoading] =useState(false);


    const createData=(data) =>{
        data.id= Date.now();
        setDb([...db,data]);

    };
    const updateData=(data) =>{
        let newData = db.map(el => el.id === data.id ? data: el);
        setDb(newData);
    };
    const deleteData=(id) =>{
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
          );
      
          if (isDelete) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            return;
          }

    };

  
    return (
        <div className='crudcanchas'>
            <p>desde crud de crudcanchas</p>
            <CrudForm createData={createData}
            updateData={updateData}
            datatoEdit={datatoEdit}
            setDatatoEdit={setDatatoEdit}/>
            <CrudTable data={db} 
            setDatatoEdit={setDatatoEdit}
            deleteData={deleteData}
            
            />

  
        </div>
    );
}
  export default Crudcanchas;