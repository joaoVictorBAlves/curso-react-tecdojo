import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div className="App">
      <h1>Navegação Simples</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/contact" Component={ContactUs} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
