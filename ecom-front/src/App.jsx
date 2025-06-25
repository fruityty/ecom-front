import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import theme from './theme';
// import { ThemeProvider, CssBaseline } from '@mui/material';
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
       
        </Routes>
    </Router>
  );
}

export default App;
