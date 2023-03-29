import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header
        style={{
          marginTop: '20px',
          width: '50vw',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3vw',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
