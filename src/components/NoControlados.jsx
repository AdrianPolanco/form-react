import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => {
    const [error, setError] = useState(false);
    const form = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Click");

        //form.current es el elemento seleccionado, al mas puro estilo de un elemento seleccionado en Javascript
        const data = new FormData(form.current);

        //Object.fromEntries convierte un par de valores en un array en key (el primero) y values (el segundo) y almacena cada par dentro de un objeto, de manera que, si hay 3 array con dos valores cada uno, Object.fromEntries lo pasará a un objeto con 3 keys y sus respectivos values
        const dataObjects = Object.fromEntries([...data.entries()]);
        const { name, description, state } = dataObjects;
        console.log(dataObjects);
        if (!description.trim() || !name.trim()) {
            setError(!error);
        } else {
            error && setError(!error);
        }
    };

    //const showError = () =>

    return (
        /*En React, en lugar de document.querySelector y id usamos useRef y
            ref(en el elemento JSX en cuestion)
            
            Es muy importante usar name en cada input, ya que eso sera lo que nos permitira capturar la informacion dentro de ellos con React*/
        <div>
            <form action="" onSubmit={handleSubmit} ref={form}>
                <input
                    type="text"
                    placeholder="Ingrese TODO"
                    className="form-control mb-2"
                    defaultValue={"Aprender React y C#"}
                    name="name"
                />
                <textarea
                    className="form-control mb-2"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Ingrese descripción de la tarea..."
                    name="description"
                    defaultValue={"Lleno"}
                />
                <select
                    className="form-select mb-2"
                    name="state"
                    defaultValue={"completado"}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-info text-light">
                    Procesar
                </button>
                {error && (
                    <span className="bg-danger text-light d-block p-3 fs-3 mt-5">
                        Error, llena los campos!
                    </span>
                )}
            </form>
        </div>
    );
};

export default NoControlado;
