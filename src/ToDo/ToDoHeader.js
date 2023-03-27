import React, { useState } from 'react';
import data from './tododata.json';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function ToDoHeader() {
  const [toDoList, settoDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    settoDoList(mapped);
  };
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    settoDoList(filtered);
  };
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    settoDoList(copy);
  };
  return (
    <>
      <div className="taskblock">
        <h2>TO DO LIST FORM </h2>
        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
        />
        <ToDoForm addTask={addTask} />
      </div>
    </>
  );
}
