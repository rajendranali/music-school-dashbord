import React from 'react';
import Sidebar from '../Router/Sidebar';
import RouterPages from '../Router/RouterPages';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/12 h-full bg-white">
        <Sidebar />
      </div>
      <div className="w-11/12 h-full  overflow-y-auto pl-4 bg-gray-100 p-5">
        <RouterPages />
      </div>
    </div>
  );
};

export default Layout;
