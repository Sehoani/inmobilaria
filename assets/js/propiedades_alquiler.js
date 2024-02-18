console.log("Conectado el js")
const propiedadesAlquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: ' Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo. ',
    direccion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: ' 2.000',
    smoke: false,
    pets: true
  },

  {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar ',
    direccion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: '2.500',
    smoke: true,
    pets: true
  },
  {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial ',
    direccion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: '2.200',
    smoke: false,
    pets: false
  },

  {
    nombre: 'Finca fin del mundo',
    src: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Hermosa casa al final del mundo, tranquilidad y aire puro garantizado ',
    direccion: 'Final del mundo, 1410, Patagonia Chilena',
    habitaciones: 6,
    baños: 4,
    costo: '3.600',
    smoke: true,
    pets: true
  }
]
export default propiedadesAlquiler;


const mostrarCasas1 = (casas, containerId) => {
  const container1 = document.getElementById(containerId)
  casas.forEach((casas1) => {
    const { nombre, src, descripcion, direccion, habitaciones, baños, costo, smoke, pets } = casas1;
    const card1 = document.createElement("div")
    card1.classList.add("col-md-4", "mb-4")
    card1.innerHTML = `
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
    container1.appendChild(card1);

  }
  )
};
const init1 = () => {
  mostrarCasas1(propiedadesAlquiler, 'alquiler');
}
window.addEventListener('load', init1);
