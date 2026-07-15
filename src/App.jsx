import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Gallery from "./pages/Gallery";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import ScrollToTop from "./components/common/ScrollToTop";



function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;