import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ] 

function App() {
  const localContacts = getContacts()

  const [contacts, setContacts] = useState(() => {
    return localContacts ?? initialContacts
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
  function getContacts() {
    return JSON.parse(localStorage.getItem('contacts'));
  };

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    
    if (
      contacts.some(contact =>
        contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts!`);
    };

    setContacts([contact, ...contacts])
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({id})=> id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
}

export default App;

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     if (
//       this.state.contacts.some(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       return alert(`${name} is already in contacts!`);
//     }

//     this.setState(({ contacts }) => {
      
//       return {
//         contacts: [contact, ...contacts],
//       };
//     });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(el =>
//       el.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   componentDidMount () {
//     const saveContacts = localStorage.getItem('contacts')
//     const parseContacts = JSON.parse(saveContacts)
//     if(saveContacts){
//       this.setState({
//         contacts: parseContacts
//       })
//     }
//     // console.log(saveContacts)
//   };

//   componentDidUpdate (prevProps, prevState){
//     if(this.state.contacts !== prevState.contacts){
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     } 
//     // console.log(prevState.contacts)
//     // console.log(this.state.contacts)
//   };

//   render() {
//     const { filter } = this.state;

//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }




