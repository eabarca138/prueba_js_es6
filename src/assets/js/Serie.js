class Serie {
    constructor(nombre, personajes = []) {
        this.nombre = nombre;
        this.personajes = personajes;
    }
  agregarPersonajes(personaje) {
    return this.personajes.push(personaje);
  }
   getPersonajes() {
    const app = document.getElementById("app");
     setTimeout(() => {
      this.personajes.map((x) =>{

        const element = x.imagen
        const element2 = x.obtenerNombre
        const element3 = x.especie
        const element4 = x.estado
        const element5 = x.origen
        
        app.innerHTML += `
        <div class= "col-12 col-sm-6 col-md-4 col-lg-3 px-4">
            <div class="card my-3" style="width: 100%">
                <img src="${element}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Nombre: ${element2}</p>
                    <p class="card-text">Especie: ${element3}</p>
                    <p class="card-text">Estado: ${element4}</p>
                    <p class="card-text">Origen: ${element5}</p>
                </div>
            </div>
        </div>
    `;
    })
}, 3000) 
    
  }
}

export default Serie;