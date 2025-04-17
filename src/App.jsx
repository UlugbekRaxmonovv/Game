import { Toaster } from "react-hot-toast";
import Hom from "./page/Hom";
import Login from "./page/Login";
import Register from './page/Register'
import Auth from './page/Auth/Auth'
import { Route, Routes } from "react-router-dom";
import Games from "./page/DashboardPages/Games/Games";
import Statistika from "./page/DashboardPages/Dashboard/Statistika";
import Manager from "./page/Layouts/Manager";
import Map from "./page/DashboardPages/Map/Map";
import BookingSystem from "./page/DashboardPages/BookingSystem/BookingSystem";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
<Routes>
      <Route path="/" element={<Hom/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Auth />}>
          <Route path="/dashboard" element={<Manager />}>
            <Route path="statestika" element={<Statistika />} />
            <Route path="games" element={<Games />} />
            <Route path="map" element={<Map />} />
            <Route path="bookings" element={<BookingSystem />} />
            
            
          </Route>
        </Route>
    </Routes>
    </div>
  );
};

export default App;

