import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return ( 
    <div>
    
  <form> 
    <label for='Ename'>Enter your Name</label>
       <input
    value={name}
    id="Ename"
    type="text"
    onChange={({target}) => setName(target.value)}
    required
      />
      <label for ='phone-number'>Enter your Phone Number(USA)</label>
  <input
    value={phone}
    id="phone-number"
    type="tel"
    //A pattern attribute to the phone <input> with a regex (USA)
    pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
    onChange={({target}) => setPhone(target.value)}
    required
  />
  <label for='email'>Enter your Email</label>
  <input
    value={email}
    id="email"
    type="email"
    onChange={({target}) => setEmail(target.value)}
    required
  />

  <input 
    type='submit' />
 </form>
</div>
  );
};
