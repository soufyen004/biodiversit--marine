import React from 'react'
import { Navbar ,NavDropdown,Container,Nav} from 'react-bootstrap'
import Logo from '../media/logo.png'
import Intellcap from '../media/intellcap.png'
import maFlag from '../media/ma_flag.png'
import frFlag from '../media/fr_flag.png'

function RespNav() {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
          <a className="navbar-brand img-fluid" href="#">
            <img src={Intellcap} alt="Logo" width="55" class="d-inline-block p-0" />
          </a>
          <button class="btn btn-light me-auto fs-5 fa-beat" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-angles-right"></i> </button>
          <a className="navbar-brand img-fluid p-0 d-lg-none" href="#">
            <img src={Logo} alt="" width="200" class="d-inline-block p-0" />
          </a>
        <button className="navbar-toggler text-body" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon fs-3"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
                <a className="nav-link text-body fs-5" href="#">
                  <i class="fa-solid fa-home"></i> Accueil 
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-body fs-5" href="#">
                  <i class="fa-solid fa-circle-info"></i> Qui sommes-nous 
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-body fs-5" href="#">
                  <i class="fa-solid fa-envelope"></i> Contactez nous
                </a>
            </li>
          </ul>
          
          <div class="dropdown dropdown-menu-end d-flex mx-2 ms-auto">
            <button class="btn btn-transparent dropdown-toggle border border-primary ms-auto" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              <i className='fa-solid fa-language'></i>  Langue
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item text-center" type="button"><img width={'20px'} src={maFlag}/> AR</button></li>
              <li><button class="dropdown-item text-center" type="button"><img width={'20px'} src={frFlag}/> FR</button></li>
            </ul>
          </div>

          <div>
          <a className="navbar-brand img-fluid p-0 d-none d-lg-block" href="#">
            <img src={Logo} alt="" width="200" class="p-0" />
          </a>
          </div>
        </div>
      </div>
  </nav>

    </>
  )
}

export default RespNav