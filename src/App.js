import './App.scss';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import AdminPage from './admin/AdminPage';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer';

import AboutUs from './pages/About/AboutUs';
import Help from './pages/Help/Help';
import News from './pages/News/News';
import OperatingApp from './pages/Application/OperatingApp';
import ConstructorApp from './pages/Application/ConstructorApp';

import ContactUs from './pages/ContactUs/ContactUs';

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
        { path: "operating-app", element: <OperatingApp /> },
        { path: "constructor-app", element: <ConstructorApp /> },
        { path: "about", element: <AboutUs /> },
        { path: "help", element: <Help /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "news", element: <News /> },
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
