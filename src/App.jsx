import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
