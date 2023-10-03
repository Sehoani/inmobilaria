
const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: ' Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678' ,
        habitaciones: 4,
        baños: 4,
        costo: '5.000',
        smoke: false ,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        direccion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: '1.200',
        smoke: true,
        pets: true
    },

    {
        nombre: ' Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        direccion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: '4,500',
        smoke: false,
        pets: true
    },

    {
        nombre: 'Chameleon Villa',
        src: 'https://hips.hearstapps.com/hmg-prod/images/chameleon-villa-una-villa-en-indonesia-foto-dkoh-0117-1531241474.jpg?crop=0.902xw:0.902xh;0.0977xw,0.0983xh&resize=2048:*',
        descripcion: 'Esta casa en Bali se funde con el entono dada su privilegiada situacion en un exuberante bosque',
        direccion: 'Zona Costanera suroeste de Bali',
        habitaciones: 4,
        baños: 2,
        costo: '6,500',
        smoke: false,
        pets: true
    },
]
export default propiedadesVenta;


const mostrarCasas = (casas, containerId) => {
    const container = document.getElementById(containerId)
    casas.forEach((casas) => {
        const { nombre, src, descripcion, direccion, habitaciones, baños, costo, smoke, pets } = casas;
        const card = document.createElement("div")
        card.classList.add("col-md-4", "mb-4", )
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
          <p><i class="fas fa-dollar-sign"></i>${costo}</p> 



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