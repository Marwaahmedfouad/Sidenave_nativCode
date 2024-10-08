import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidenav({ navWidth, Rtl, toggleDirection }) {
  const [isOpenDropdownlist, setIsOpenDropdonlist] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapsedWidth = 70; 
  
  function toggleDropdonlist() {
    setIsOpenDropdonlist(!isOpenDropdownlist);
  }
  function toggleCollapsed() {
    setIsCollapsed(!isCollapsed);
    setIsOpenDropdonlist(false);
  }
  function closeDropdown() {
    setIsOpenDropdonlist(false)
  }

  return (
    <div className="bg-main text-white fixed bottom-0 top-0 ">
      <div className="d-flex justify-content-between align-items-center">
        <div className="nn">
          <i className="fa-solid fa-bars mx-2" onClick={toggleCollapsed}></i>
        </div>
        <div onClick={toggleDirection}>
          {Rtl ? (
            <i
              className="fa-solid fa-toggle-on fs-4 mx-1 mt-1"
              style={{ color: "white" }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-toggle-off fs-4 mx-1 mt-1"
              style={{ color: "white" }}
            ></i>
          )}
        </div>
      </div>

      <nav
        style={{
          width: isCollapsed ? `${navWidth}px` : `${collapsedWidth}px`,
          height: "100vh",
        }}
      >
        <ul
          className="bg-anger list-unstyled"
          style={{ padding: "10px", cursor: "pointer" }}
        >
          <Link
             to="/" 
             onClick={closeDropdown}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <li className="cursor-pointer">
              <i
                className="fa-solid fa-house mx-2 fs-5"
                style={{ paddingBottom: isCollapsed ? "20px" : "0px" }}
              ></i>
              <span style={{ visibility: isCollapsed ? "visible" : "hidden" }}>
                Home
              </span>
            </li>
          </Link>
          <Link
            to="about"
            onClick={closeDropdown}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <li className="cursor-pointer">
              <i
                className="fa-solid fa-house mx-2 fs-5"
                style={{ paddingBottom: isCollapsed ? "20px" : "0px" }}
              ></i>
              <span style={{ visibility: isCollapsed ? "visible" : "hidden" }}>
                About
              </span>
            </li>
          </Link>
          <ul
            className="list-unstyled "
            style={{ padding: " 0px", cursor: "pointer" }}
          >
            <li
              className="cursor-pointer "
              onClick={toggleDropdonlist}
              style={{ paddingBottom: isCollapsed ? "10px" : "0px" }}
            >
              <i className="fa-solid fa-layer-group mx-2 fs-5 "></i>
              <span
                className=""
                style={{ visibility: isCollapsed ? "visible" : "hidden" }}
              >
                Link
              </span>

              {isOpenDropdownlist ? (
                <i
                  className="fa-sharp fa-solid fa-chevron-down mx-2"
                  style={{ visibility: isCollapsed ? "visible" : "hidden" }}
                ></i>
              ) : (
                <i
                  className="fa-sharp fa-solid fa-chevron-up mx-2"
                  style={{ visibility: isCollapsed ? "visible" : "hidden" }}
                ></i>
              )}
            </li>
            {isOpenDropdownlist ? (
              <>
                <li
                  className="ps-4 cursor-pointer"
                  style={{
                    visibility: isCollapsed ? "visible" : "hidden",
                    paddingRight: Rtl ? "20px" : "0px",
                  }}
                >
                  <Link
                    to="about"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    Link 1
                  </Link>
                </li>
                <li
                  className="ps-4 cursor-pointer"
                  style={{
                    visibility: isCollapsed ? "visible" : "hidden",
                    paddingRight: Rtl ? "20px" : "0px",
                  }}
                >
                  <Link
                    to="about"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    Link 1
                  </Link>
                </li>
                <li
                  className="ps-4 cursor-pointer"
                  style={{
                    visibility: isCollapsed ? "visible" : "hidden",
                    paddingRight: Rtl ? "20px" : "0px",
                  }}
                >
                  <Link
                    to="about"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    Link 1
                  </Link>
                </li>
              </>
            ) : (
              <div></div>
            )}
            {/*droupdawn --> true & iscolled--->true*/}
            {!isCollapsed && isOpenDropdownlist && (
              <ul
                className="position-absolute bg-secondary rounded-1 p-3 list-unstyled"
                style={{
                  left: !Rtl ? `${collapsedWidth}px` : '',
                  right: Rtl ? `${collapsedWidth}px` : 'auto',
                  top: "110px",
                  width: "5%",
                }}
              >
                <li>
                  <Link
                    to="about"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    Link 1
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenav;
