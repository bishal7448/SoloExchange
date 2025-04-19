import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Market, Navbar, PostDeal, Footer } from "./components";
import SoloExchangeContextProvider from "./context/SoloExchangeContext";

const App = () => {
  return (
    <SoloExchangeContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/market" element={<Market />} />
          <Route path="/post" element={<PostDeal />} />
        </Routes>
        <Footer />
      </Router>
    </SoloExchangeContextProvider>
  );
};

export default App;
