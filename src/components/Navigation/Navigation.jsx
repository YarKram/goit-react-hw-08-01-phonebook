import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
// import css from '../Navigation/Navigation.module.css';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '3vw',
        }}
      >
        <NavLink
          className={css.navlinkStyles}
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#2e7d32',
            background: isActive ? '#2e7d32' : '#fff',
          })}
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className={css.navlinkStyles}
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#2e7d32',
              background: isActive ? '#2e7d32' : '#fff',
            })}
            to="/contacts"
          >
            ContactBook
          </NavLink>
        )}
      </nav>
    </>
  );
};
