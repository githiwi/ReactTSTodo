import React, {useState} from "react";
import {Todo} from "./models";
import {MdModeEdit,MdDelete,  } from 'react-icons/md'
import {IoIosCloudDone} from 'react-icons/io'
import './styles.css'
import TodoList from "./TodoList";
type Props = {
todo: Todo,
todos: Todo[],
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo,todos, setTodos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false)//keep the track of the edit mode is on or not
    const [editTodo, setEditTodo] = useState<string>(todo.todo)//keep value of the edit text ("todo.todo" is the text to be editted to apear)
    const handleDone = (id:number)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone: !todo.isDone}:todo))
    }

    const handleDelete = (id:number)=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleEdit = (e:React.FormEvent,id:number)=>{
        e.preventDefault()

        setTodos(
            todos.map((todo)=> ( todo.id === id ? {...todo, todo:editTodo}: todo))
        );
        setEdit(false)
    }

    // const handleEdit = ()
    return (
        <form className="todos_single" onSubmit={(e)=>handleEdit(e,todo.id) }>
            { edit ? (
                <input value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className="todo__single"/>
            ) : (
            todo.isDone? (
                <s className="todos_single_text">{todo.todo}</s>
    ):(    <span className="todos_single_text">{todo.todo}</span>)
                )}


            <div>
                {/*if(!edit && !todo.isDone ) if edit mode is not on and todo is not done*/}
                <span className="icon" onClick={ ()=>{
                    if(!edit && !todo.isDone ){
                    setEdit(!edit)}
                }}> <MdModeEdit /></span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}><MdDelete /></span>
                <span className="icon" onClick={()=>handleDone(todo.id)}><IoIosCloudDone /></span>
            </div>
        </form>
    )
}

export default SingleTodo;