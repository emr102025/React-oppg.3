import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoProviders from "./providers/TodoProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProviders>
      <App />
    </TodoProviders>
  </StrictMode>,
);
