import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ListComponent from "./components/ListComponent.jsx";
import Football from "./components/Football.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ListComponent /> */}

    <Football />
  </StrictMode>
);
