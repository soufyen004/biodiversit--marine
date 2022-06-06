import React from 'react'
import Logo from '../media/logo.png'
import Intellcap from '../media/intellcap.png'
import maFlag from '../media/ma_flag.png'
import frFlag from '../media/fr_flag.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function RespNav() {

  const { t, i18n } = useTranslation()

  let HTML = document.querySelector('#HTML')
  const LanguageToFr = ()=>{
    i18n.changeLanguage('fr')
    HTML.attributes.dir.textContent="ltr" 
  }
  const LanguageToAr = ()=>{
    i18n.changeLanguage('ar')
    HTML.attributes.dir.textContent="rtl"
  }
 

  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-light shadow" dir="ltr">
      <div className="container-fluid">
      <button class="btn btn-light me-2 fs-6" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars fs-3"></i> </button>
          <Link to="/" className="navbar-brand img-fluid">
            <img src={Intellcap} alt="Logo" width="200" class="d-none d-md-inline-block p-0" />
          </Link>
          <div class="dropdown dropdown-menu-end d-flex me-auto">
            <button class="btn btn-transparent dropdown-toggle ms-auto" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              <i className='fa-solid fa-language fs-4'></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button onClick={LanguageToAr} class="dropdown-item text-center" type="button"><img width={'20px'} src={maFlag}/> AR</button></li>
              <li><button onClick={LanguageToFr} class="dropdown-item text-center" type="button"><img width={'20px'} src={frFlag}/> FR</button></li>
            </ul>
          </div>
          <a className="ms-auto navbar-brand img-fluid p-0 d-lg-none" href="#">
            <img src={Logo} alt="" width="190" class="d-inline-block p-0" />
          </a>
          
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='ms-auto'>
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