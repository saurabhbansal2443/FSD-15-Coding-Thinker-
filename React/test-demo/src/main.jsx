import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// let h1 = <h1>I am h1tag </h1>;// JSX

// Component -> A function that returns JSX

function H1() {
  return <h1>I am h1tag </h1>;
}

// H1()
//<H1></H1>
// <H1/>
createRoot(document.getElementById("root")).render(<App />);
