//Importando useState para poder empezar a usar el hook de useState
import { useState } from "react";

//IMPORTANTE: LOS NOMBRES DE LOS COMPONENTES (ES DECIR, DE LAS FUNCIONES QUE CONTENGAN EL JSX) SIEMPRE DEBEN COMENZAR EN MAYUSCULA, MIENTRAS QUE LAS ETIQUETAS JSX SIEMPRE VAN EN MINUSCULA

const MyButton = ({ text }, { change }) => {
    //Props no es mas que un objeto que el componente recibe como argumento, cuando llamamos al componente, en lugar de pasarselo usando parentesis (), se lo pasamos con este ejemplo: <MyButton text="Click"/>

    //El atributo se puede llamar text o como desees, y ya con eso le pasara el objeto props, y podremos acceder al texto usando props.nombreAtributo que hayamos puesto en la llamada al componente

    return (
        <button className="boton" onClick={change}>
            {text}
        </button>
    );
};

export default MyButton;
