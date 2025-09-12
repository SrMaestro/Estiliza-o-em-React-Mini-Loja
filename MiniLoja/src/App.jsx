import NavBar from "./components/NavBar";
import "./styles/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
    </BrowserRouter>
  );
}

export default App;
