import React, { useState, useEffect } from 'react';

import '../../styles/tests/CheckList.css';

export default function CheckList(pops) {
  const [nextId, setNextId] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksData = JSON.parse(localStorage.getItem('oak-tasks-1875'));
    const nextIdData = Number(localStorage.getItem('oak-next-id-1875'));

    setTasks(tasksData);
    setNextId(nextIdData);
  }, []);

  useEffect(() => {
    localStorage.setItem('oak-tasks-1875', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('oak-next-id-1875', String(nextId));
  }, [nextId]);

  function getTasksByCompletedState(completeState) {
    if (!tasks) {
      return console.log('Tasks load error');
    }

    return tasks.map((task) => {
      if (task.isCompleted === completeState) {
        return (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) => handleChangeTitle(task.id, e.target.value)}
            />
            <button onClick={() => handleSwitchCompleteState(task.id)}>
              {task.isCompleted ? (
                <img src="./images/uncheck.png" width="16px" alt="" />
              ) : (
                <img src="./images/check.png" width="16px" alt="" />
              )}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>
              <img src="./images/delete.png" height="16px" alt="" />
            </button>
          </li>
        );
      }

      return null;
    });
  }

  function handleSwitchCompleteState(taskId) {
    let newTasks = [...tasks];

    newTasks.forEach((task) => {
      if (task.id === Number(taskId)) {
        task.isCompleted = !task.isCompleted;
      }
    });

    setTasks(newTasks);
  }

  function handleChangeTitle(taskId, newTitle) {
    let newTasks = [...tasks];

    newTasks.forEach((task) => {
      if (task.id === Number(taskId)) {
        task.title = newTitle;
      }
    });

    setTasks(newTasks);
  }

  function handleAddTask() {
    let newTasks = [
      {
        id: nextId,
        title: '',
        isCompleted: false,
      },
      ...tasks,
    ];

    setNextId(nextId + 1);
    setTasks(newTasks);
  }

  function handleDeleteTask(taskId) {
    let newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <section id="check-list">
      <h3 id="check-list--title">Master Check-listnator 3000</h3>
      <button onClick={handleAddTask}>
        <img src="./images/add.png" alt="" />
      </button>
      <p>
        <i>(It's using localstorage)</i>
      </p>

      <h3>To do</h3>
      <ul>{getTasksByCompletedState(false)}</ul>

      <h3>Completed</h3>
      <ul>{getTasksByCompletedState(true)}</ul>
    </section>
  );
}
