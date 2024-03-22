import "./App.css";
import SiteRoutes from "./SiteRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SiteRoutes />
      <Footer />
    </>
  );
}

export default App;
