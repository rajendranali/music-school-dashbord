import React from 'react';
import Sidebar from '@/Router/Sidebar';
import Router from '@/Router/Router';

const Layout = () => {
  return (

       <div style={{ display: "flex", height: "100vh" }}>
       <div style={{ width: "10%", height: "100%", backgroundColor: "white" }}>
         <Sidebar />
       </div>
       <div style={{ width: "90%", height: "100%", backgroundColor: "gray.300", overflowY: "auto" }}>
         <Router />
       </div>
     </div>
  );
}

export default Layout;
