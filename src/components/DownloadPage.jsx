import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';



function DownloadPage(props) {
    const { t, i18n } = useTranslation()

  return (
    <div className='container mt-5'>
        <div class="card text-center">
            <div class="card-header">
                <h2 className='p-1'><i class="fa-solid fa-cloud-arrow-down me-1"></i> {t('page de telechargement')}</h2>
            </div>
            <div class="card-body">
                <h5 class="card-title">{t('telecharger')} <span className="badge text-bg-success"> {props.thematique}</span></h5>
                <p class="card-text">{t('Selectioner')}</p>
                <div className="d-flex justify-content-center p-2 align-items-center mb-5">
                    <h5 className="text-muted">
                    {t('click')} <Link to="/" className="btn btn-light border border-2 mx-2">
                        <i class="fa-solid fa-house me-1"></i>
                    </Link> {t('accueil')}
                    </h5>
                    
                </div>
                
            <div class="row d-flex justify-content-start">
            
                <div class="col-md-6 col-lg-4 col-xl-3  my-2">
                    <div class="card shadow">
                        <img src={props.imgLink} class="card-img-top" alt="Image link Broken" />
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-mobile-screen me-1"></i>{t('version mobile/tablet')}</h5>
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <Link to={props.MobileLink} className="btn btn-primary">
                            <i class="fa-solid fa-download mx-1"></i>{t('telecharger')}
                        </Link>
                    </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-4 col-xl-3  my-2">
                    <div class="card shadow">
                        <img src={props.imgLink} class="card-img-top" alt="Image link Broken" />
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-computer me-1"></i>{t('version desktop')}</h5>
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <Link to={props.DesktopLink} className="btn btn-primary">
                            <i class="fa-solid fa-download mx-1"></i>{t('telecharger')}
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadPage