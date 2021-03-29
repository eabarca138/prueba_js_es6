 import '../../assets/css/style.css';
/* import "../../assets/scss/style.scss"; */
import "regenerator-runtime/runtime.js";
import Serie from './Serie';
import Personaje from './Personajes';



const llamarPersonajes = (() => {
    const urlBase = "https://rickandmortyapi.com/api";

    let cantidadPersonajes = 0;
  
    const dataPersonajes = async (urlAPI, urlP) => {
      let arr = [];
      try {
        const req = await fetch(urlAPI + urlP);
        const data = await req.json();
        arr = data.results;
      } catch (error) {
        console.log(
          `Error en la obtención de los personajes desde la API: ${error}`
        );
      } finally {
        return arr;
      }
    };
  
    const funcionPublica1 = async() => {
      const serie = new Serie("Rick and Morty");
      
      const resultadosAPI = await dataPersonajes(urlBase, "/character");
      cantidadPersonajes = resultadosAPI.length;
  
      resultadosAPI.forEach(personaje => {
        const per = new Personaje(personaje.id, personaje.name, personaje.species, personaje.image, personaje.status, personaje.origin.name);
        serie.agregarPersonajes(per);
        console.log(serie.personajes);
      });
      serie.getPersonajes()
    };
    const funcionPublica2 = () => {
      console.log(`Personajes a mostrar: ${cantidadPersonajes}`);
      const numP = document.getElementById('cantidadPersonajes')
      const spinner = document.getElementById('spinner')
      
      setTimeout(() => {
        spinner.classList.remove('spinner-border');
      }, 3000)
      
       setTimeout(() => {
         numP.innerHTML = cantidadPersonajes;
       }, 3000)
    }
    return {
      funcionPublica1,
      funcionPublica2,
    };
  })();
  
  llamarPersonajes.funcionPublica1();
  llamarPersonajes.funcionPublica2();