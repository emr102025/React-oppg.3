import { createContext, useContext } from "react";

// Making the context creator
const TodoContext = createContext();

// The provider for context
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useContext;

  const addTodo = (text) => {};
  const toggleTodo = (id) => {};
  const removeTodo = (id) => {};

  // Provider of objects  for values
  const providerObject = {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };

  // Returning the TodoContext to be used as a provider
  return (
    <TodoContext.Provider value={providerObject}>
      {children}
    </TodoContext.Provider>
  );
};
