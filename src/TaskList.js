import React, { useState, useContext } from 'react';

import Task from './Task';
import { ToDoListContext } from './ToDoListProvider'

const TaskList = () => {
    const [toDoList, setToDoList] = useContext(ToDoListContext);

    const handleClickChangeStatus = props => taskId => {
        setToDoList(preToDoList => preToDoList.filter(task => false));
        toDoList.forEach(element => {
            setToDoList(preToDoList => [...preToDoList, element.id === props.id ? { id: element.id, name: element.name, isChecked: !element.isChecked } : element]);
        })
    }

    return (
        <React.Fragment>
            {toDoList.map(task => (
                <Task id={task.id} name={task.name} isChecked={task.isChecked} onClick={handleClickChangeStatus} />
            ))}
        </React.Fragment>
    )
}


export default TaskList