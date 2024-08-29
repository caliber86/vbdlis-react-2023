import './App.scss';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet, useParams } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import AdminPage from './admin/AdminPage';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import AboutUs from './pages/About/AboutUs';
import Guides from './pages/Guides/Guides';
import News from './pages/News/News';
import OperatingApp from './pages/Application/OperatingApp';
import ConstructorApp from './pages/Application/ConstructorApp';
import ContactUs from './pages/ContactUs/ContactUs';
import Terms from './pages/Legal/Terms';
import Security from './pages/Legal/Security';
import ScrollToTop from './components/ScrollToTop';
import AppDetailPage from './pages/Application/AppDetailPage';
// import NewDetail from './pages/News/NewDetail';

function App() {
  const Main = () => (
    <ScrollToTop>
      <Header />
      <Outlet />
      <Footer />
    </ScrollToTop>
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
      // errorElement: <PageNotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "operating-app", element: <OperatingApp /> },
        { path: "operating-app/*", element: <AppDetailPage />},
        { path: "constructor-app", element: <ConstructorApp /> },
        { path: "about", element: <AboutUs /> },
        { path: "guides/*", element: <Guides /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "news", element: <News /> },
        { path: "terms", element: <Terms /> },
        { path: "security", element: <Security /> },
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
    <div className={`VbdLisApp`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
