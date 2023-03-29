import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/operations';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <p style={{ margin: '0px' }}>Hello, {user.name}</p>
      <Button
        variant="contained"
        color="error"
        onClick={logOutUser}
        type="submit"
      >
        Log out
      </Button>
    </div>
  );
};
