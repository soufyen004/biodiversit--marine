import React from 'react'
import { Link } from 'react-router-dom'

function HomeCard(props) {
  return (
        <div className="col-md-6 col-lg-4 col-xl-3 my-2">
            <div className="card m-auto shadow" style={{width:"18rem"}}>
                <img src={props.img} className="card-img-top" style={{height:'12rem'}} />
            <div className="card-body">
                <h3 className="card-text"><i class="fa-solid fa-gamepad me-1"></i> {props.title}</h3>
            </div>
            <div className="card-footer d-flex justify-content-evenly p-1">
                <Link to={props.downloadLink} className="btn btn-primary m-1 btn-sm">
                <i class="fa-solid fa-download me-1"></i>Telecharger
                </Link>
                <div className="btn btn-primary m-1 btn-sm">
                <i class="fa-brands fa-unity me-1"></i>Version WebGl
                </div>
            </div>
            </div>
        </div>
  )
}

export default HomeCard