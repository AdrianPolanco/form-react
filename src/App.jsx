import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
    const [todos, setTodos] = useState(initialStateTodos);
    const addTodo = (todo) => {
        //Le agrega el nuevo todo a una copia del array de objetos ya existente, al setear el todos, pasa a tener ahora
        //un valor nuevo, por tanto, el componente Todos agregará una tarea nueva al haber un nuevo item en el array
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        //La diferencia de filter con map es que si por ejemplo le dices a map todo.id !== id, map simplemente te devolverá el resultado de la comparación especifica de esos valores, digase, true o false. Filter, a diferencia de map, te devolverá cada objeto ENTERO, que cumpla con la condición de todo.id !== id
        const newArray = todos.filter((todo) => todo.id !== id);
        setTodos(newArray);
    };

    const updateTodo = (id) => {
        const newArray = todos.map((todo) => {
            todo.id === id && (todo.state = !todo.state);
            return todo;
        });
        setTodos(newArray);
    };

    const orderTodo = (arrayTodos) => {
        return arrayTodos.sort((a, b) => {
            if (a.priority === b.priority) return 0;
            if (a.priority) return -1;
            if (!a.priority) return 1;
        });
    };

    //El primer argumento es un callback que la funcion que se ejecutara cuando se haga el primer renderizado, el segundo argumento son unos corchetes([]) vacíos, que usaremos en caso de que querramos que el primer argumento se ejecute solo una vez. si queremos que el useEffect se ejecute cada vez que el array todos tenga un cambio, ponemos [todos] como segundo argumento
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <div className="container mb-2">
            <h1 className="my-5">Formulario</h1>
            <Formulario addTodo={addTodo}></Formulario>
            <Todos
                todos={orderTodo(todos)}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            ></Todos>
        </div>
    );
}

export default App;
