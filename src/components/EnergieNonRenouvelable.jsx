import React from 'react'

function EnergieNonRenouvelable() {
  return (
    <div className='container mt-5'>
        <div class="card text-center">
            <div class="card-header">
                <h2 className='p-1'><i className='fa-solid fa-battery-three-quarters me-1'></i> Energie Non Renouvelable</h2>
            </div>
            <div class="card-body">
                <h5 class="card-title">Telecharger ce jeu</h5>
                <p class="card-text">Selectioner la version pour lancer le telechargement.</p>

            <div class="row">
            
                <div class="col-md-6 col-lg-4 col-xl-3 m-auto my-2">
                    <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-mobile-screen me-1"></i>Version Mobile</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">
                            <i class="fa-solid fa-download me-1"></i>Telecharger
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 m-auto my-2">
                    <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-tablet-screen-button me-1"></i>Version Tablet</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">
                            <i class="fa-solid fa-download me-1"></i>Telecharger
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 m-auto my-2">
                    <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-computer me-1"></i>Version Desktop</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">
                            <i class="fa-solid fa-download me-1"></i>Telecharger
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EnergieNonRenouvelable