import React from "react";
import "./styles.css"
import {Todo} from "./models";
import SingleTodo from "./SingleTodo";

interface Props {

    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>; //React.Dispatch is a generic type provided by React that represents a function to dispatch actions. In this case, it's a function that can be used to update the state.
}
const TodoList = ({todos,setTodos}: Props) => {
    return (
        <div className="todos">
            {todos.map(todo => (
                <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    )
}

export default TodoList;