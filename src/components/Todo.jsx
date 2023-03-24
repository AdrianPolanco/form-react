import classNames from "classnames";
//Libreria usada para añadir estilos condicionales

const Todo = ({ todo, deleteTodo }) => {
    const { id, title, description, priority, state } = todo;
    return (
        <li
            className={classNames(
                "list-group-item",
                "mt-2",
                priority && "border border-info"
            )}
            key={id}
        >
            <div className={`d-flex justify-content-between align-items-start`}>
                <div>
                    <h5
                        className={`${state && "text-decoration-line-through"}`}
                    >
                        {title}
                    </h5>
                    <p className={`${state && "text-decoration-line-through"}`}>
                        {description}
                    </p>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteTodo(id)}
                        >
                            Eliminar
                        </button>
                        <button className="btn btn-sm btn-warning">
                            Actualizar
                        </button>
                    </div>
                </div>
                <span className="badge text-bg-info text-light">
                    {priority && "Prioritario"}
                </span>
            </div>
        </li>
    );
};

export default Todo;
