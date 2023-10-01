console.log("conectado js venta")


const principal = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: ' Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        habitaciones: 4 Habitaciones,
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        costo: 5.000,
        baños: 4,
        smoke: false,
        pets: false
    }

    {
        nombre: '',
        src: '',
        descripcion: '',
        habitaciones: 0,
        costo: 0,
        smoke: ,
        pets: 
    }

    {
        nombre: '',
        src: '',
        descripcion: '',
        habitaciones: 0,
        costo: 0,
        smoke: ,
        pets: 
    }
]
let html = ''
for (let venta of principal){
    html += 
    <h1> ${principal [0].nombre}</h1>
    <img>${principal.src}</img>
}
const tarjeta1 = document.querySelector(".cardqqqq")
tarjeta1.innerHTML = html