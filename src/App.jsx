import { useState } from "react";
import NoControlado from "./components/NoControlados";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";
import Todo from "./components/Todo";

const initialStateTodos = [
    {
        id: 1,
        title: "Aprender React",
        description: "Quiero aprender React",
        state: true,
        priority: true,
    },
    {
        id: 2,
        title: "Aprender C#",
        description: "Quiero aprender C#",
        state: false,
        priority: true,
    },
    {
        id: 3,
        title: "Aprender ASP.NET Core",
        description: "Quiero aprender ASP.NET Core",
        state: false,
        priority: false,
    },
];

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
    return (
        <div className="container mb-2">
            <h1 className="my-5">Formulario</h1>
            <Formulario addTodo={addTodo}></Formulario>
            <Todos todos={todos} deleteTodo={deleteTodo}></Todos>
        </div>
    );
}

export default App;
