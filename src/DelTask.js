import React, { useState, useContext } from "react";
import { ToDoListContext } from './ToDoListProvider'

const DelTask = ({ id }) => {

    const [toDoList, setToDoList] = useContext(ToDoListContext);

    const delTask = id => {
        setToDoList(prevToDoList => prevToDoList.filter(el => id !== el.id))
    }

    return (
        <span className='del' onClick={delTask(id)} >×</span>
    )
}


export default DelTask;