import React, { useState, useContext } from "react";

import { ToDoListContext } from './ToDoListProvider'

const AddTask = () => {

    const [name, setName] = useState('');
    const [toDoList, setToDoList] = useContext(ToDoListContext);

    const addName = event => {
        setName(event.target.value);
    }

    const handleClickAddTask = event => {
        event.preventDefault();
        if(name != '')
            setToDoList(prevToDoList => [...prevToDoList, { id: new Date().getTime(), name, isChecked: false }])
        setName('');
    }

    return (
        <div className="addnewitem">
            <input type="text" name="name" value={name} onChange={addName} placeholder="Task Name"/>
            <button onClick={handleClickAddTask} className="addtask">Add task</button>
        </div>
    );
}

export default AddTask;