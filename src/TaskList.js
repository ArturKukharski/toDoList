import React, { useState, useContext } from 'react'; 
import Task from './Task';
import {ToDoListContext} from './ToDoListProvider'

const TaskList = () => {
    const [toDoList, setToDoList] = useContext(ToDoListContext);

    return (
        <div>
            {toDoList.map(task => (
                <Task id={task.id} name={task.name} status={task.status}/>
            ))}
        </div>
    )
}


export default TaskList