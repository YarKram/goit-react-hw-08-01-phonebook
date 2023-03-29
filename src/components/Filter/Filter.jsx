import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { applyFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onInputChange = evt => {
    dispatch(applyFilter(evt.currentTarget.value));
  };

  return (
    <TextField
      sx={{ width: '50vw' }}
      margin="normal"
      fullWidth
      id="name"
      label="Find contacts by name"
      autoComplete="name"
      autoFocus
      onChange={onInputChange}
    />
  );
};

export default Filter;
