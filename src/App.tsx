import React, {useState} from 'react';
import './App.css';
import InputFeild from "./component/InputFeild";
import {Todo} from "./component/models";
import TodoList from "./component/TodoList";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([])
     console.log(todos)

    const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if (todo) {
        setTodos([...todos,{ id: Date.now(), todo, isDone:false}])
        setTodo("")// after the to do has been created we need to clear the inputfield so we set it empty ""
    }
    };
    return (
        <div className="App">
            <span className="heading"> ASEBEZA</span>
            <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos}/>
            {/*{todos.map((t)=> (<li>{t.todo}</li>))}*/}
        </div>
    );
}

export default App;
