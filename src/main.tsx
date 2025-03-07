import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import App from "./app/App.tsx";
import AppProvider from "./app/AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
