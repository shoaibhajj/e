import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
function App() {
  return (
    <>
      <Router scrollRestoration={false}>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
