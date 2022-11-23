import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskTitle: string) {
    const addTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    };

    setTasks([
      ...tasks,
      addTask
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    
    setTasks(newTasks);    
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}