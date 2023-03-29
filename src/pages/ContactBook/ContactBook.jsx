import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';

export const ContactBook = () => {
  return (
    <>
      <div>
        <h1 style={{ marginBottom: '0px' }}>Phonebook</h1>
        <ContactForm />
        <h2 style={{ marginBottom: '0px' }}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
      <Outlet />
    </>
  );
};
