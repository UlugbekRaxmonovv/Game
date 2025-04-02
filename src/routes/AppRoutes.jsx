import { Routes, Route } from "react-router-dom";
import Hom from "../page/Hom";
import Login from "../page/Login";
import Register from "../page/Register";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hom/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/regestr" element={<Register/>} />
    </Routes>
  );
};

export default AppRoutes;
