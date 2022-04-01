import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Header</h1>
      <nav>
      <Link to=".">Home</Link> | <Link to="admin">Admin</Link> | <Link to="counter">Counter</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
