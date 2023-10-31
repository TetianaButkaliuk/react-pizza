import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./App.css";
import "./scss/app.scss";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFoundBlock />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
