import React, { useState, useContext } from "react";
import { ToDoListContext } from './ToDoListProvider'


const AddTask = () => {

    const [name, setName] = useState('');
    const [toDoList, setToDoList] = useContext(ToDoListContext);

    const addName = e => {
        setName(e.target.value);
        console.log({ toDoList })
    }

    const addTask = e => {
        e.preventDefault();
        setToDoList(prevToDoList => [...prevToDoList, { id: new Date().getTime(), name: name, status: false }])
        setName('');
    }


    return (
        <form onSubmit={addTask}>
            <input type="text" name="name" value={name} onChange={addName} />
            <button>Add task</button>
        </form>
    );
}

export default AddTask;