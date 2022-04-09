import React, { useState } from "react";
import '../perfilDueño/perfil.scss';
import { DatePicker, TimePicker } from "@material-ui/pickers";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "tar/lib/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const locales= {
  "es-Per": require("date-fns/locale/pt-BR")
}

const localizer =dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
const events = [
  {
    title: " 7-8",
    allDay:true,
    start: new Date(2022,4,4),
    end: new Date(2022,4,4)
  },
  {
    title: " 8-9",
    allDay:true,
    start: new Date(2022,4,5),
    end: new Date(2022,4,6)
  },
  {
    title: " 9-10",
    allDay:true,
    start: new Date(2022,4,6),
    end: new Date(2022,4,6)
  },
]

const PerfilDueño = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [Hora1Seleccionada, setHora1Seleccionada] = useState(new Date());
  const [Hora2Seleccionada, setHora2Seleccionada] = useState(new Date());
  const [newEvent, setNewEvent] =useState({title:"",start:"",end:""});
  const [allEvents, setAllEvents]= useState(events);
  const handleAddEvent= () =>{
    setAllEvents([...allEvents,newEvent]);
  }
  return (
    <div className="Time">
      <div className="perfil-dueño">
        <div className="imagenperfil">
          <img className="foto-jugador" src="https://cdn.pixabay.com/photo/2014/04/02/16/17/ball-306820_960_720.png" alt="10px" height="80px"></img>
          <h2>Bienvenido : </h2>
          <p>correo</p>
        </div>
        <div className="btn">Modificar Perfil</div>
      </div>
      <div className="contenido-body">
        <h1>Cancha Los Rosales</h1>
        <form className="cabecera" onClick=''>
          <div className="etiquetas">
            <label className="labels">Hora Inicio</label>
            <label className="labels">Hora Final</label>
            <label className="labels">Seleccionar Fecha Inicio</label>
            <label className="labels">Seleccionar Fecha Final</label>
          </div>
          <div className="contenido">
            <div className="Hora1">
              <TimePicker value={Hora1Seleccionada} onChange={setHora1Seleccionada} />
            </div>
            <div className="Hora2">
              <TimePicker value={Hora2Seleccionada} onChange={setHora2Seleccionada} />
            </div>
            {newEvent.title} = {Hora1Seleccionada}-{ Hora2Seleccionada};
            <div className="Fecha">
              <DatePicker placeholderText="Start Date" selected={newEvent.start} 
              onChange={(start) => setNewEvent({...newEvent,start})}/>
            </div>
            <div className="Fecha">
              <DatePicker placeholderText="End Date" selected={newEvent.end} 
              onChange={(end) => setNewEvent({...newEvent,end})}/>
            </div>
            <button onClick={handleAddEvent}> Add Event</button>
          </div>
        </form>
        <button className="boton-agregar">Agregar Horario</button>
        <button className="boton-agregar">Eliminar Horario</button>
      <Calendar localizer={localizer} events ={allEvents}
      startAccessor="start" endAccessor="end"/>
      </div>
    </div>
  );
}
export default PerfilDueño;