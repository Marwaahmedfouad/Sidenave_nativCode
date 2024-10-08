import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";

function Layout() {
  const [navWidth, setnavWidth] = useState(150);
  const [Rtl, setRtl] = useState(false);
  function toggleDirection() {
    setRtl(!Rtl)
  }
  return (
    <>
      <div className="d-flex" style={{direction:Rtl?'rtl':'ltr'}}>
        <Sidenav navWidth={navWidth} Rtl={Rtl} toggleDirection={toggleDirection}/>
        <div className=""
          style={{
            width: `calc(100%-${navWidth}px)`,
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
