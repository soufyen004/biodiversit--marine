import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function HomeCard(props) {
    const { t, i18n } = useTranslation()

  return (
        <div className="col-md-6 col-lg-4 col-xl-3 my-2">
            <div className="card m-auto shadow" style={{width:"18rem"}}>
                <img src={props.img} className="card-img-top" style={{height:'12rem'}} />
            <div className="card-body">
                <h3 className="card-text"><i class="fa-solid fa-gamepad me-1"></i> {props.title}</h3>
            </div>
            <div className="card-footer d-flex justify-content-evenly p-1">
                <Link to={props.downloadLink} className="btn btn-primary m-1 btn-sm">
                <i class="fa-solid fa-download mx-1"></i>{t('telecharger')}
                </Link>
                <div className="btn btn-primary m-1 btn-sm">
                <i class="fa-brands fa-unity mx-1"></i>{t('version webgl')}
                </div>
            </div>
            </div>
        </div>
  )
}

export default HomeCard