import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    phone: "",
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem("contacts");
    if (saveContacts) {
      this.setState({ contacts: JSON.parse(saveContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = () => {
    const { name, phone, contacts } = this.state;
    if (name && phone) {
      const newContact = { name, phone };
      this.setState({
        contacts: [...contacts, newContact],
        name: "",
        phone: "",
      });
    }
  };

  deleteContact = (index) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((_, i) => i !== index);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { contacts, name, phone } = this.state;
    return (
      <div className="App">
        <h1>Contact Book</h1>
        <ContactForm
          name={name}
          phone={phone}
          handleInputChange={this.handleInputChange}
          addContact={this.addContact}
        />
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
