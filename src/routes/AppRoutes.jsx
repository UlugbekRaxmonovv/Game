import { Routes, Route } from "react-router-dom";
import Hom from "../page/Hom";
import Login from "../page/Login";
import Register from "../page/Register";
import Auth from "../page/Auth/Auth";
import Manager from "../page/Layouts/Manager";
import Dashboard from '../../src/page/DashboardPages/Dashboard/Statistika'
import Games from "../page/DashboardPages/Games/Games";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hom/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Auth />}>
          <Route path="/dashboard" element={<Manager />}>
            <Route path="statestika" element={<Dashboard />} />
            <Route path="games" element={<Games />} />
            
          </Route>
        </Route>
    </Routes>
  );
};

export default AppRoutes;
