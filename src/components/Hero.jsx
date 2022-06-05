import React,{Suspense } from 'react'
import Estuaire from '../media/Estuaire.jpg'
import Ocean from '../media/Ocean.jpg'
import Plage from '../media/Plage.jpg'
import Port from '../media/Port.jpg'
import Zone_Humide from '../media/Zone_Humide.jpg'
import HomeCard from './HomeCard'
import { useTranslation } from 'react-i18next';

function Hero() {

  const { t, i18n } = useTranslation()

  return (
      <>
    <div className='container d-flex flex-column justify-content-center mt-5'>

        <h1 className="fs-3">{t('bienvenue')} <span className='fw-bold'><i className="fa-solid fa-leaf me-1 fs-4"></i>Biodiversite</span>  
        <small class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 fs-5 mx-1">V1.05</small>
        </h1>
    
      <div className='container mt-5'>
          <div className="row">
            <HomeCard title={t('estuaire')} img={Estuaire} downloadLink="/download/Estuaire" />
            <HomeCard title={t('ocean')} img={Ocean} downloadLink="/download/Ocean" />
            <HomeCard title={t('plage')} img={Plage} downloadLink="/download/Plage" />
            <HomeCard title={t('port')} img={Port} downloadLink="/download/Port" />
            <HomeCard title={t('zone humide')} img={Zone_Humide} downloadLink="/download/ZoneHumide" />

          </div>
      </div>
    
    </div>

    </>

  )
}

export default Hero