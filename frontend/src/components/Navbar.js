import React from 'react'
import './navbar.css';
import { Formik } from 'formik';
import { Link, NavLink, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Navbar = () => {



    return (



       
        <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5555/5555042.png"
                  height={15}
                  alt="MDB Logo"
                  loading="lazy"
                />
                Meme Generator
              </a>
              {/* Left links */}
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                                Home
                            </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                </li>
                
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}
            <div className="d-flex align-items-center">
              {/* Icon */}
              <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart" />
              </a>
              
              {/* Avatar */}
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9513/9513709.png"
                    className="rounded-circle"
                    height={25}
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
      
    )
}

export default Navbar