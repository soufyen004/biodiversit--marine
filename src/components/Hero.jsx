import React from 'react'
import Estuaire from '../media/Estuaire.jpg'
import Ocean from '../media/Ocean.jpg'
import Plage from '../media/Plage.jpg'
import Port from '../media/Port.jpg'
import Zone_Humide from '../media/Zone_Humide.jpg'
import HomeCard from './HomeCard'

function Hero() {
  return (
      <>
    <div className='container d-flex flex-column justify-content-center mt-5'>
        <h1 className="fs-3">Bienvenue a <span className='fw-bold'><i className="fa-solid fa-leaf me-1 fs-4"></i>Biodiversite</span>  
        <small class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2 fs-5 mx-1">V1.05</small>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi sequi libero animi recusandae, voluptas nulla omnis eaque molestias! Animi pariatur ad praesentium? Similique rem culpa veniam dolorem magni a!</p>
    
      <div className='container mt-5'>
          <div className="row">
            <HomeCard title="Estuaire" img={Estuaire} downloadLink="/download/Estuaire" />
            <HomeCard title="Ocean" img={Ocean} downloadLink="/download/Ocean" />
            <HomeCard title="Plage" img={Plage} downloadLink="/download/Plage" />
            <HomeCard title="Port" img={Port} downloadLink="/download/Port" />
            <HomeCard title="Zone Humide" img={Zone_Humide} downloadLink="/download/ZoneHumide" />

          </div>
      </div>
    
    </div>

    </>

  )
}

export default Hero