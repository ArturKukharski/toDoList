import React, { createContext, useState } from 'react';

export const ToDoListContext = createContext();

export const ToDoListProvider = props => {

    const [toDoList, setToDoList] = useState([
        { id: 1, name: 'Buy food', isChecked: false },
        { id: 2, name: 'Go to gym', isChecked: true },
        { id: 5, name: 'Talk with mom', isChecked: false }
    ]);

    return (
        <ToDoListContext.Provider value={[toDoList, setToDoList]}>
            {props.children}
        </ToDoListContext.Provider>
    )
}