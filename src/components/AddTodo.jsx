import { useTodo } from "../context/TodoContext";

export default function AddTodo() {
  const { addTodo: onAdd } = useTodo();
  return (
    <>
      <h1>AddTodo</h1>
      <form onSubmit={handleAdd} action={""}>
        <input type="text" value={inputText} onChange={}/>
        <button onClick={}>Add</button>
      </form>
    </>
  );
}
