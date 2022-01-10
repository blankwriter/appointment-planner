import React, {useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm.js'
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
   const appointments = props.appointments;
   const contacts = props.contacts;
   const addAppointment = props.addAppointment;
   
   const [title, setTitle] = useState('');
   const [contact, setContact] =  useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
     
       addAppointment(title, contact, date, time);

       setContact('');
       setDate('');
       setTime('');
       setTitle('');
     
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        title={title} 
        contact={contact}
        date={date}
        time={time}
        setDate={setDate}
        setTime={setTime}
        setContact={setContact}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        contacts={contacts}  /> 
        
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
