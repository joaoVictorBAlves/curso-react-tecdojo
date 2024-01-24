import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import "./index.css";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/contact" Component={ContactUs} />
            <Route path="/about" Component={About} />
            <Route path="/product/:id" Component={ProductDetail} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
