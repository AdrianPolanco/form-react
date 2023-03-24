import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
    return (
        <div className="mt-5">
            <h2 className="text-center">Tareas</h2>
            <ul className="list-group">
                {todos.map((todo) => {
                    const { id, title } = todo;

                    return todos.length !== 0 ? (
                        <Todo
                            key={id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                        ></Todo>
                    ) : (
                        <li className="list-group-item text-center">
                            ¡Felicidades, no tienes tareas pendientes!
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Todos;
