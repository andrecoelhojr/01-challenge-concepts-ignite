import logo from "../../assets/logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./Header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props ) {
  const [title, setTitle] = useState("");

  function handleSumit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
        <img src={logo} alt="todoList - Logo" />
        
        <form className={styles.newTaskForm} onSubmit={handleSumit}>
          <input 
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTitle} 
            value={title}
          />
          <button>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
    </header>
  )
}