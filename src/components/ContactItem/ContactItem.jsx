import PropTypes from 'prop-types';
// import { Item, DeleteButton } from './ContactItem.styled';

import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import { ListItem } from '@mui/material';

const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      sx={{ width: '50vw', paddingLeft: '0px', paddingRight: '0px' }}
      key={id}
    >
      {name}: {number}
      <Button
        // startIcon={<DeleteIcon />}
        // startIcon={<DeleteIcon />}
        sx={{ marginLeft: 'auto' }}
        variant="outlined"
        color="error"
        key={nanoid()}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
