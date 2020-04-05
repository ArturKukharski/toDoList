import React, { createContext, useState } from 'react';

export const ToDoListContext = createContext();

export const ToDoListProvider = props => {

    const [toDoList, setToDoList] = useState([
        { id: 1, name: 'Buy food', status: false },
        { id: 2, name: 'Go to gym', status: true },
        { id: 3, name: 'Talk with mom', status: false }
    ]);

    return (
        <ToDoListContext.Provider value={[toDoList, setToDoList]}>
            {props.children}
        </ToDoListContext.Provider>
    )
}