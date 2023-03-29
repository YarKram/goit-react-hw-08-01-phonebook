import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', width: '50vw' }}
      onSubmit={handleSubmit}
      autoComplete="off"
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
          required
        />
      </label>
      <label>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          autoComplete="email"
          type="email"
          name="email"
          required
        />
      </label>
      <label>
        <TextField
          margin="normal"
          fullWidth
          id="password"
          label="Password"
          autoComplete="password"
          type="password"
          name="password"
          required
        />
      </label>
      <Button variant="contained" color="success" type="submit">
        Register
      </Button>
    </form>
  );
};
