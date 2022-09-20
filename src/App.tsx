import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Github } from "./pages/Github";
import { Pokemon } from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/github" replace />} />
        <Route path="/github" element={<Github />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
