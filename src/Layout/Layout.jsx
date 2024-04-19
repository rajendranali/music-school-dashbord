import React from 'react';
import Sidebar from '../Router/Sidebar';
import RouterPages from '../Router/RouterPages';


const Layout = () => {
  return (

       <div style={{ display: "flex", height: "100vh" }}>
       <div style={{ width: "10%", height: "100%", backgroundColor: "white" }}>
         <Sidebar />
       </div>
       <div style={{ width: "90%", height: "100%", backgroundColor: "gray.300", overflowY: "auto" }}>
         <RouterPages />
       </div>
     </div>
  );
}

export default Layout;
