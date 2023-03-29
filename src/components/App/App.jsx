import { LogIn } from 'pages/LogIn/LogIn';
import { Register } from 'pages/Register/Register';
import { Home } from 'pages/Home/Home';
import { Layout } from 'components/Layout/Layout';
import { ContactBook } from 'pages/ContactBook/ContactBook';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors';
import { refreshUser } from 'redux/operations';
import { useEffect } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { CirclesWithBar } from 'react-loader-spinner';

// const Layout = lazy(() => import('components/Layout/Layout'));
// const Home = lazy(() => import('pages/Home/Home'));
// const Register = lazy(() => import('pages/Register/Register'));
// const LogIn = lazy(() => import('pages/LogIn/LogIn'));
// const ContactBook = lazy(() => import('pages/ContactBook/ContactBook'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <CirclesWithBar
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{ marginLeft: '45%', marginTop: '8%' }}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  ) : (
    <div style={{ marginLeft: '25%', marginTop: '5%' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route path="/contacts" element={<ContactBook />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
