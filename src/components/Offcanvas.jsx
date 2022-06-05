import React from 'react'
import { Link } from 'react-router-dom'
import Intellcap from '../media/intellcap.png'


function Offcanvas() {


  return (
    <div>

        <div style={{width:'320px'}} className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
            <span className="badge text-bg-primary fs-6"><i className="fa-solid fa-leaf me-1 fs-4"></i> Biodiversite V1.5</span>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">

        <div className="list-group">
            <Link to="/" className="list-group-item p-0 mb-2">
                <li className='list-group-item list-group-item-action' data-bs-dismiss="offcanvas">
                    <i class="fa-solid fa-home me-1"></i>Accueil
                </li>
            </Link>
            <Link to="/download/Estuaire" className="list-group-item p-0">
                <li className='list-group-item list-group-item-action' data-bs-dismiss="offcanvas">
                    <i class="fa-solid fa-gamepad me-1"></i>Estuaire
                </li>
            </Link>
            <Link to="/download/Ocean" className="list-group-item p-0">
                <li className='list-group-item list-group-item-action' data-bs-dismiss="offcanvas">
                    <i class="fa-solid fa-gamepad me-1"></i>Ocean  
                </li>
            </Link>
            <Link to="/download/Plage" className="list-group-item p-0">
                <li className='list-group-item list-group-item-action' data-bs-dismiss="offcanvas">
                    <i class="fa-solid fa-gamepad me-1"></i>Plage 
                </li>
            </Link>
            <Link to="/download/Port" className="list-group-item p-0">
                <li className='list-group-item list-group-item-action' data-bs-dismiss="offcanvas">
                    <i class="fa-solid fa-gamepad me-1"></i>Port 
                </li>
            </Link>
            <Link to="/download/zoneHumide" className="list-group-item p-0">
                <li className='list-group-item list-group-item-action' data-bs-dismiss="offcanvas">
                    <i class="fa-solid fa-gamepad me-1"></i>Zone Humide 
                </li>
            </Link>
        </div>
        
        <div className="btn-group mt-3 w-100" role="group" aria-label="...">
            <button className="btn btn-light border">
                Guide
            </button>
            <button className="btn btn-light border">
                Assistance
            </button>
        </div>

        <div className="mt-5 w-100 d-flex justify-content-center">
            <img src={Intellcap} alt="Logo" width="200" class="d-md-inline-block p-0" />
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default Offcanvas