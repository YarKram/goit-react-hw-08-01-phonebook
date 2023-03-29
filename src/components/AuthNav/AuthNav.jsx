import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={css.navlinkStyles}
        style={({ isActive }) => ({
          marginRight: '3vw',
          color: isActive ? '#fff' : '#2e7d32',
          background: isActive ? '#2e7d32' : '#fff',
        })}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={css.navlinkStyles}
        style={({ isActive }) => ({
          color: isActive ? '#fff' : '#2e7d32',
          background: isActive ? '#2e7d32' : '#fff',
        })}
        to="/login"
      >
        Log in
      </NavLink>
    </div>
  );
};
