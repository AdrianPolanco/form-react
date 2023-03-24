import { Fragment, useState } from "react";
import Paises from "./components/Paises.jsx";
import Estado from "./components/Estado.jsx";
import Bienvenida from "./components/Bienvenida.jsx";
//Gracias a Vite, podemos importar una imagen (o un archivo estatico) como si fuera un export default y utilizarla como cualquier otra variable
import imagenPath from "./assets/greece.jpg";

const title = "Mi primer componente en React";
const estilos = "hola";
const altImagen = "Grecia, hermoso país";
/*
Hacemos una lista de objetos con las keys id y nombre, id se usara para ponerlo como key de cada componente que se devuelva dentro de un map y no nos de error, el name es simplemente el contenido que queremos poner en el componente

const countries = [{id: 0, nombre: "Greece"}, {id: 1, nombre: "Spain"}, {id: 2, nombre: "Ireland"}];

*/

//Creando un componente, que son funciones que basicamente retornan JSX, que React transforma a HTML,CSS Y Javascript
export const App = () => {
    //La interpolacion en Javascript es basicamente pasar variables como texto (de forma dinamica) a los componetes, usando {variable}

    const [estado, setEstado] = useState(false);

    return (
        <div className="container">
            <h1 className={estilos}>{title.toUpperCase()}</h1>
            <img src={imagenPath} alt={altImagen} />
            <button className="boton" onClick={() => setEstado(!estado)}>
                Click!
            </button>
            <Estado state={estado} />
            {
                //Usaremos un componente diferente de acuerdo al valor de la variable user
                //user ? <Online /> : <Offline />
            }
            {
                //Usaremos el operador AND para renderizar determinado componente SOLO si cierta condición es verdadera(o falsa)
                estado && <Bienvenida />
            }
            {estado && <Paises />}
        </div>
    );
};

//export default App;
