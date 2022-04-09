import React, {useState, useEffect} from "react";

const initialDates = {
    
    Hora:"",
    lunes: "",
    martes: "",
    miercoles: "",
    jueves: "",
    viernes: "",
    sabado:"",
    domingo :"",
    id:null
};

const CrudForm =({ createData, updateData, datatoEdit, setDatatoEdit}) =>{
    const [form, setForm] = useState(initialDates);
useEffect(()=>{
    if(datatoEdit){
        setForm(datatoEdit);
    }else{
        setForm(initialDates);
    }
},[datatoEdit]);

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.Hora]: e.target.value,
        [e.target.lunes]: e.target.value,
        [e.target.martes]: e.target.value,
        [e.target.miercoles]: e.target.value,
        [e.target.jueves]: e.target.value,
        [e.target.viernes]: e.target.value,
        [e.target.sabado]: e.target.value,
        [e.target.domingo]: e.target.value,
        
    });
};

const handleSubmit= (e) => {
        e.preventDefault();
        console.log(form);
        if(!form.Hora || !form.lunes){
            alert("Datos incompletos");
            return;
        }

        if(form.id === null){
            createData(form)
        }
        else{
            updateData(form)
        }
        handleReset();
    };
    
    const handleReset = (e) => {
        setForm(initialDates);
        setDatatoEdit(null);
    };
    return(
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Hora" 
                placeholder="Hora" 
                value={form.Hora} 
                onChange={e => setForm({ ...form, Hora: e.target.value }) }/>
                <input type="text" 
                name="Lunes" 
                placeholder="Lunes"
                onChange={e => setForm({ ...form, lunes: e.target.value }) }
                 value={form.lunes}/>
                <input type="text" name="Martes" placeholder="Martes"
                onChange={e => setForm({ ...form, martes: e.target.value }) }
                 value={form.martes}/>
                <input type="text" name="Miercoles" 
                placeholder="Miercoles" 
                onChange={e => setForm({ ...form, miercoles: e.target.value }) }
                value={form.miercoles}/>
                <input type="text" name="Jueves" 
                placeholder="Jueves" 
                onChange={e => setForm({ ...form, jueves: e.target.value }) }
                value={form.jueves}/>
                <input type="text" name="Viernes" 
                placeholder="Viernes" 
                onChange={e => setForm({ ...form, viernes: e.target.value }) }
                value={form.viernes}/>
                <input type="text" name="Sabado" 
                placeholder="Sabado" 
                onChange={e => setForm({ ...form, sabado: e.target.value }) } 
                value={form.sabado}/>
                <input type="text" name="Domingo" 
                placeholder="Domingo" 
                onChange={e => setForm({ ...form, domingo: e.target.value }) } 
                value={form.domingo}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>

            </form>
        </div>
    )
}
export default CrudForm;