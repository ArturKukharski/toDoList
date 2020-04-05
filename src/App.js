import React, { useState } from 'react';
import TaskList from './TaskList'
import { ToDoListProvider } from './ToDoListProvider'
import AddTask from './AddTask'

function App() {


  return (
    <div>
      <h3>My To Do List</h3>
      <ToDoListProvider>
        <AddTask />
        <TaskList />
      </ToDoListProvider>
    </div>
  );
}

export default App;