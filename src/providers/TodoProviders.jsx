import { TodoProvider } from "../context/TodoContext";
import TodoApp from "../TodoApp";

export default function TodoProviders({ children }) {
  return (
    <>
      <TodoProvider>
        <TodoApp>{children}</TodoApp>
      </TodoProvider>
    </>
  );
}
