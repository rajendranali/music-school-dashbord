import React from 'react';
import Sidebar from '../Router/Sidebar';
import RouterPages from '../Router/RouterPages';


const Layout = () => {
  return (

       <div style={{ display: "flex", height: "100vh" }}>
       <div style={{ width: "6%", height: "100%", backgroundColor: "white" }}>
         <Sidebar />
       </div>
       <div style={{ width: "94%", height: "100%", backgroundColor: "gray.300", overflowY: "auto",paddingLeft:"20px",  }}>
         <RouterPages />
       </div>
     </div>
  );
}

export default Layout;
