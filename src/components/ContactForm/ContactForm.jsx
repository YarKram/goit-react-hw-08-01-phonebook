import { addContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = {
      name,
      number,
    };

    if (
      contacts
        .map(({ name }) => name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(contact));
    }
    form.reset();
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', width: '50vw' }}
      onSubmit={handleSubmit}
    >
      <label>
        <TextField
          margin="normal"
          fullWidth
          id="name"
          label="Name"
          autoComplete="name"
          autoFocus
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <TextField
          margin="normal"
          fullWidth
          id="phone"
          label="Phone"
          autoComplete="phone"
          autoFocus
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button variant="contained" color="success" type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
