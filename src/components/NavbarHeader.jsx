import React from 'react'
import nsLogo from '../assets/NSLogo.png'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
            <Link to="/"><img src={nsLogo} className="img-fluid nav-img"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav fs-5 ms-auto">
                    <Link className="nav-link" to="/"><b>Home</b></Link>
                    <Link className="nav-link" to="/projects"><b>Projects</b></Link>
                    <Link className="nav-link" to="/links"><b>Links</b></Link>
                    <Link className="nav-link" to="/about"><b>About</b></Link>
                    <Link className="nav-link btn btn-website ms-2" to="/contact" role="button"><b>Contact Me</b></Link>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default navbar