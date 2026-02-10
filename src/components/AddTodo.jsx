import { useTodo } from "../context/TodoContext";
import { useState } from "react";

export default function AddTodo() {
  const { addTodo: onAdd } = useTodo();
  const [text, setText] = useState(" ");

  const addNewTodo = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <>
      <h1>AddTodo</h1>
      <form onSubmit={addNewTodo} action={""}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addNewTodo}>Add</button>
      </form>
    </>
  );
}
