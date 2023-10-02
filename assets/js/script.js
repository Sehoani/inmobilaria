import propiedadesVenta from "./propiedades_venta.js"
import propiedadesAlquiler from "./propiedades_alquiler.js"

const mostrarCasas = (casas, containerId) => {
    const container = document.getElementById(containerId)
    const casasLimitados = casas.slice(0, 3)
    casasLimitados.forEach((casa) => {
        const { nombre, src, descripcion, direccion, habitaciones, baños, costo, smoke, pets } = casas;
        const card = document.createElement("div")
        card.classList.add("col-md-4", "mb-4")
        card.innerHTML = `
            <div class="card">
                 <img src="${src}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
             <h5 class="card-title"> ${nombre}</h5>
          <p class="card-text">
            ${descripcion}
          </p>



          <p>
            <i class="fas fa-map-marker-alt"></i> ${direccion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${habitaciones}
            <i class="fas fa-bath"></i> ${baños}
          </p>
          <p><i class="fas fa-dollar-sign"></i>${costo} </p> 



          <p class= "${smoke ? 'text-danger' : 'text-warning'}">
            <i class="fas ${smoke ? 'fa-smoking-ban' : 'fas fa-smoking'}"></i> 
          </p>
          <p class="${pets ? 'text-danger' : 'text-warning'}">
            <i class= "fas ${pets ? 'fa-solid fa-ban' : 'fas fa-paw'}"></i> 
          </p>
        </div>
      </div>
    </div>
        
        `;
        container.appendChild(card);

    }
    )
};



const init = () =>{
    mostrarCasas(propiedadesVenta,'venta');
}
window.addEventListener ('load', init);




