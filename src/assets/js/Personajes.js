class Personaje{
    constructor(id, nombrePersonaje, especie, imagen, estado, origen){
        const _id = id
        this.getId = () => _id
        const _nombre = nombrePersonaje
        this.getNombre = () => _nombre
        this.especie = especie,
        this.imagen = imagen,
        this.estado = estado,
        this.origen = origen
    }
    get obtenerId(){
        return this.getId()
    }
    get obtenerNombre(){
        return this.getNombre()
    }
}

export default Personaje;