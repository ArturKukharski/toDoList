import React, { useState, useContext } from "react";

import { ToDoListContext } from './ToDoListProvider'

const DelTask = ({ id }) => {

    const [toDoList, setToDoList] = useContext(ToDoListContext);

    const handleClickDelTask = id => taskId =>{
        setToDoList(prevToDoList => prevToDoList.filter(task => id !== task.id))
    }

    return (
        <span className='delete' onClick={handleClickDelTask(id)} >×</span>
    )
}


export default DelTask;