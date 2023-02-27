import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Cart from "./pages/Cart";
import Category from "./pages/category/[category]";
import Home from "./pages/Home";
import Product from "./pages/product/[product]";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/product/:product" element={<Product />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
