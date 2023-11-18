import React, { Component } from 'react';
import Filtr from './Filtr/Filtr';
import InputForm from './InputForm/InputForm';
import Contact from './Contacts/Contacts';
import { Section } from './Section/Section.styled';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (data) => {
    const {contacts} = this.state

    const isContactExist = contacts.some(
    (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
  );

  if (isContactExist) {
    alert("Contact already exists!");
    return;
  }

  this.setState((prevState) => ({
    contacts: [...prevState.contacts, data]
  }));
};

  handleChangeSearch = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  handleDeleteContact = (id) => {
      this.setState((prevState) => ({
    contacts: prevState.contacts.filter((contact) => contact.id !== id),
  }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Section>
        <InputForm onSubmit={this.formSubmitHandler} />
        <Filtr filter={filter} onChange={this.handleChangeSearch} />
        <Contact contacts={visibleContacts} onDeleteContact={this.handleDeleteContact} />
      </Section>
    );
  }
}
