import React, { Component } from 'react'
import logo from '../assets/HOME/Footer/LogoDinkbit/logo-dinkbit-22.svg'
import {NavLink} from 'react-router-dom'

class Navbar extends Component  {
  
  render() {

    return (
    <nav className="navbar navbar-expand navbar-light">
  <img src={logo} alt="logo" id="logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-3">
      <li className="nav-item mr-2 ml-2">
        <NavLink to="/home" className="nav-link" href="#">Home</NavLink>
      </li>
      <li className="nav-item dropdown mr-2 ml-2">
        <NavLink to="/us" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ¿Qué hacemos?
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item mr-2 ml-2">
        <NavLink to="/projects" className="nav-link" href="#">Proyectos</NavLink>
      </li>

      <li className="nav-item mr-2 ml-2">
        <NavLink to="/contact" className="nav-link" href="#">Contacto</NavLink>
      </li>
      <li className="nav-item mr-2 ml-2">
        <NavLink to="blog" className="nav-link" href="#">Blog</NavLink>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}

export default Navbar;