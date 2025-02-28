import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const el = (
  <StrictMode>
    <App />
  </StrictMode>
);

const root = createRoot(document.getElementById("root")!);
root.render(el);
