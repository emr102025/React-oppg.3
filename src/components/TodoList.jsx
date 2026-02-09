import { useTodo } from "../context/TodoContext";

export default function TodoList() {
  const {checkingTodos} = useTodo();
  return (
    <>
      <h1>TodoList</h1>
      <ul>
        <li>
            <input type="checkbox" checked={done} onChange={}/> 
            <button onClick={}>X</button>
        </li>
      </ul>
    </>
  );
}
