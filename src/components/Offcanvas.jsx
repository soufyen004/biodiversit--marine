import React from 'react'

function Offcanvas() {
  return (
    <div>

        <div style={{width:'320px'}} class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <span class="badge text-bg-primary fs-5">Eco-Platforme V1.5</span>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        
        
    <div class="accordion" id="accordionPanelsStayOpenExample">
    
    <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <i class="fa-solid fa-bolt me-1"></i> Energies 
        </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
                <ul class="list-group">
                    <li class="list-group-item"><i class="fa-solid fa-car-battery"></i> Energie Renouvelable</li>
                    <li class="list-group-item"><i class="fa-solid fa-battery-three-quarters"></i> Energie Non Renouvelable</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            <i class="fa-solid fa-cloud me-1"></i> Changement Climatique 
        </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
                <ul class="list-group">
                    <li class="list-group-item"><i class="fa-solid fa-bus"></i> Transport</li>
                    <li class="list-group-item"><i class="fa-solid fa-building"></i> Batiments</li>
                    <li class="list-group-item"><i class="fa-solid fa-recycle"></i> Déchets</li>
                    <li class="list-group-item"><i class="fa-solid fa-industry"></i> Industrie</li>
                    <li class="list-group-item"><i class="fa-solid fa-lightbulb"></i> Eclairage</li>
                    <li class="list-group-item"><i class="fa-solid fa-tractor"></i> Agriculture</li>
                    <li class="list-group-item"><i class="fa-solid fa-tree"></i> Déforisation</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            <i class="fa-solid fa-fan me-1"></i> Quality Air
        </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
        <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            <i class="fa-solid fa-droplet me-1"></i> Eau
        </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
        <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>

        <div className="mt-5 d-flex justify-content-center">
            <button type="button" class="btn btn-danger mx-2 w-50"><i class="fa-solid fa-clipboard-question"></i> Guide</button>
            <button type="button" class="btn btn-warning mx-2 w-50"><i class="fa-solid fa-circle-question"></i> Assistance</button>
        </div>
        
    </div>


        </div>
        </div>
    </div>
  )
}

export default Offcanvas