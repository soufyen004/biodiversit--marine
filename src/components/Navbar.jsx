import React from 'react'
import { Navbar ,NavDropdown,Container,Nav} from 'react-bootstrap'
import Logo from '../media/logo.png'

function RespNav() {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand img-fluid" href="#">
          <img src={Logo} alt="" width="130" height="60" class="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-body" href="#" id="energieDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-bolt"></i> Energies 
              </a>
              <ul className="dropdown-menu" aria-labelledby="energieDropdown">
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-car-battery"></i> Energie Renouvelable</a></li>
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-battery-three-quarters"></i> Energie Non Renouvelable</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-body" href="#" id="changementClimatDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-cloud"></i> Changement Climatique 
              </a>
              <ul className="dropdown-menu" aria-labelledby="changementClimatDropdown">
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-bus"></i> Transport</a></li>
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-building"></i> Batiments</a></li>
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-recycle"></i> Déchets</a></li>
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-industry"></i> Industrie</a></li>
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-lightbulb"></i> Eclairage</a></li>
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-tractor"></i> Agriculture</a></li>
                <li><a className="dropdown-item" href="#"><i class="fa-solid fa-tree"></i> Déforisation</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#"><i class="fa-solid fa-fan"></i> Quality Air</a>
             </li>
            <li className='nav-item'>
              <a href="#" className="nav-link text-body"><i class="fa-solid fa-droplet"></i> Eau</a>
            </li>

          </ul>

          <button type="button" class="btn btn-danger mx-2"><i class="fa-solid fa-clipboard-question"></i> Guide</button>
          <button type="button" class="btn btn-warning mx-2"><i class="fa-solid fa-circle-question"></i> Assistance</button>

        </div>
      </div>
  </nav>

    </>
  )
}

export default RespNav