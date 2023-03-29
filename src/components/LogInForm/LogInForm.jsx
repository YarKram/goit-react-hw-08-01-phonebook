import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          id="email"
          label="Email"
          autoComplete="email"
          type="email"
          name="email"
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
        />
      </label>
      <Button variant="contained" color="success" type="submit">
        Log In
      </Button>
    </form>
  );
};
