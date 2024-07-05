import React from "react";

const ContactForm = ({ name, phone, handleInputChange, addContact }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <button onClick={addContact}>Add Contact</button>
    </div>
  );
};

export default ContactForm;
