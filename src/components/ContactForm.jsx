import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    const { name, phone, handleInputChange, addContact } = this.props;
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
  }
}

export default ContactForm;
