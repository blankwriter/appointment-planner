import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage.js";
import { ContactsPage } from "./containers/contactsPage/ContactsPage.js";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

 

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  function addContact(name, phoneNumber, email) {
    setContacts(prev => [...prev, {name, phoneNumber, email}])
    
  };

  function addAppointment(title, contact, date, time) {
       setAppointments(prev => [...prev, { title, contact, date, time }])
  };
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
         Contacts                                             
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
         Appointments                                                      
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage  
             contacts={contacts}
             addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
               appointments={appointments}
               addAppointment={addAppointment} 
               contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;