import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
    
    <form onSubmit={handleSubmit}>
      <label for ='nameApp'>Name your Appointment</label>
    <input 
      type="text"
      id="nameApp"
      value={title}
      onChange={({target}) => setTitle(target.value)}
    />
    <input 
      type="date"
      value={date}
      min={getTodayString()}
      onChange={({target}) => setDate(target.value)}
    />
    <input 
      type="time"
      value={time}
      onChange={({target}) => setTime(target.value)}
    />
    <ContactPicker 
      contacts={contacts}
      value={contact}
      onChange={({target}) => setContact(target.value)}
    />
    <input type="submit"/>
  </form>
  </div>
  );
};
