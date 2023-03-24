import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
    //Se destructura los tres estados para emparejarlos con el value de cada input
    //Para hacerlo mas facil, en el useState le pasamos como parametro un objeto que contendra cada uno de los estados que usaremos
    //en el onChange, en vez de cada estado individual, le pasamos una funcion flecha que ejecute el setState(setTodo) en el que pasaremos como parametro un objeto que contenga una copia de todo lo que hay en los estados, y especificandole la key a la que queremos igualar el valor del input, si por ejemplo queremos pasar al objeto el valor del input del titulo, haremos ({...todo, title: e.target.value})
    const [todo, setTodo] = useState({
        title: "Aprender React",
        description: "Quiero aprender React",
        state: "pendiente",
        priority: false,
    });

    const { title, description, state, priority } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Algo anduvo mal!",
                footer: "<h3>Debes llenar todos los campos</h3>",
            });
        }

        addTodo({
            id: Date.now(),
            //Le agregamos una copia del todo (el objeto con varios estados)
            ...todo,
            //Despues de agregar la copia, modificamos la key state de la misma, evaluando si retorna true o false
            state: state === "completado",
        });
        return Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Tarea añadida exitosamente!",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleChange = (e) => {
        e.target.name === "priority"
            ? setTodo({ ...todo, [e.target.name]: e.target.checked })
            : setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const showAlert = (input, campo, articulo) => {
        //Hacemos aparecer la alerta si alguno de los campos obligatorios estan vacios viendo si el estado de los componentes respectivos estan o no vacios
        const necesario = articulo == "El" ? "necesario" : "necesaria";
        return (
            !input && (
                <span className="d-block p-3 bg-danger text-light m-5 col-6">
                    {articulo} {campo} es {necesario}
                </span>
            )
        );
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese TODO"
                    className="form-control mb-2"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                {showAlert(title, "titulo", "El")}
                <textarea
                    className="form-control mb-2"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Ingrese descripción de la tarea..."
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
                {showAlert(description, "descripcion", "La")}
                <div className="form-check mb-2">
                    <input
                        type="checkbox"
                        name="priority"
                        className="form-check-input"
                        id="inputCheck"
                        checked={priority}
                        onChange={handleChange}
                    />
                    <label htmlFor="inputCheck">Dar prioridad</label>
                </div>

                <select
                    className="form-select mb-2"
                    name="state"
                    value={state}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <button type="submit" className="btn btn-info text-light">
                    Procesar
                </button>
            </form>
        </div>
    );
};

export default Formulario;
