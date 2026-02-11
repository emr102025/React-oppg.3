import { useTodo } from "../context/TodoContext";

export default function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodo();

  return (
    <>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleTodo(item.id)}
            />
            <label>{item.text}</label>

            <button onClick={() => removeTodo(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
