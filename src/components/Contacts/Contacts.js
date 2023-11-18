import React from "react";
import { ContactList, ContactItem } from "./Contacts.styled";

const Contact = ({ contacts, onDeleteContact }) => (
    <ContactList title='Contacts'>
    {contacts.map((contact) => (
        <ContactItem key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </ContactItem>
        ))}
    </ContactList>

)


export default Contact;
