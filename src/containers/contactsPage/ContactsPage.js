import React, { useState, useEffect } from "react";
import { TileList } from "../../components/tileList/TileList.js";
import { ContactForm } from "../../components/contactForm/ContactForm.js";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 //List of contact
  const contacts = props.contacts;

  // callback function for adding a new contact
  const addContact = props.addContact;

  //Declaring usestate for the four states
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicateName, setDuplicateName] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicateName) {
     addContact(name, phone, email);

     setEmail('');
     setName('');
     setPhone('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect( () => {
    for(const contact of contacts){
     if(name === contact.name){
        setDuplicateName(true);
     }
    return;
  }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts} />
      </section>
    </div>
  );
};
