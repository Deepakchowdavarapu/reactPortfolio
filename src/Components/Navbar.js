import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import profilePhoto from '../profilephoto.jpg'; // Correctly import the image


function Navbar() {
  const hideMenu = () => {

  };

  return (
    <nav className="navbar">
      
      {/* <div id = "background">
        <img src = {profilePhoto} alt = "mg"></img>
      </div> */}

      <div className="navbar-logo">
        <h1>PORTFOLIO</h1>
        </div>
      <ul className="navbar-list">
        <li className="navbar-item" onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li className="navbar-item" onClick={hideMenu}>
          <Link to="/About">
            <BsPerson /> About
          </Link>
        </li>
        <li className="navbar-item" onClick={hideMenu}>
          <Link to="/Project">
            <BsCodeSlash /> Project
          </Link>
        </li>
        <li className="navbar-item" onClick={hideMenu}>
          <Link to="/Resume">
            <CgFileDocument /> Resume
          </Link>
        </li>
        <li className="navbar-item" onClick={hideMenu}>
          <Link to="/Skills">
            <CgFileDocument /> Skills
          </Link>
        </li>
        <li className="navbar-item" onClick={hideMenu}>
          <Link to="/Stats">
            <CgFileDocument /> stats
          </Link>
        </li>
      </ul>
    
    </nav>
  );
}

export default Navbar;
