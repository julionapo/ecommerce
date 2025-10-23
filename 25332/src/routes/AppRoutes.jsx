import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<h1>Página no encontrada</h1>} />
  </Routes>
);
