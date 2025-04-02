import Footer from "./components/Footer";
import Header from "./components/Header";
import Hom from "./page/Hom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />

      <div className="flex-grow container mx-auto py-6 px-6 max-w-[1200px]">
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
