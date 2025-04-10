import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import WhatsAppFloating from "./pages/Whatsapp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <WhatsAppFloating />
    </Router>
  );
};

export default App;
