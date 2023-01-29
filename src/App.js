import './App.scss';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import AdminPage from './admin/AdminPage';
import PageNotFound from './components/PageNotFound';
import AboutUs from './pages/About/AboutUs';
import Help from './pages/Help/Help';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Clients from './pages/Home/Clients';

function App() {

  const Main = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

  const Admin = () => (
    <ul>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link to="/aaa">AAA</Link>
      </li>
      <li>
        <Link to="/bbb">BBB</Link>
      </li>
    </ul>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <PageNotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutUs /> },
        { path: "help", element: <Help /> },
        { path: "contact", element: <Clients /> }
      ]
    },
    {
      path: "/admin",
      element: <Admin />,
      errorElement: <PageNotFound />,
      children: [
        { index: true, element: <AdminPage /> },
      ]
    }
  ]);

  return (
    <div className="VbdLisApp">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
