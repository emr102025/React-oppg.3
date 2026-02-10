import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoList({ title, done, id }) {
  const { checkingTodos } = useTodo();

  const { toggleTodo: onToggle, deleteTodo: onDelete } = useTodo();
  const [newText, setNewText] = useState(title);

  return (
    <>
      <ul>
        <li>
          <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
          {checkingTodos ? (
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <h3>{title}</h3>
          )}
          <button onClick={() => onDelete(id)}>X</button>
        </li>
      </ul>
    </>
  );
}
